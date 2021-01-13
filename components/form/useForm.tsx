import { useState, useRef } from 'react';
import { HOOK_KEY } from './context';

const validateRules = (name: string, value: any, rules: any) => {
  for (let j = 0; j < rules.length; j += 1) {
    const rule = rules[j] || {};
    const { required, pattern, validator, message = `${name} is required` } = rule;
    if (required) {
      if (!value && value !== 0 && value !== false) {
        return [false, value, { error: true, message }];
      }
    }
    if (pattern) {
      const result = pattern.test(value);
      if (!result) {
        return [false, value, { error: true, message }];
      }
    }
    if (validator && typeof validator === 'function') {
      const result = validator(value);
      if (!result) {
        return [false, value, { error: true, message }];
      }
    }
  }

  return [true];
};

export class FormStore {
  private store: any = {};

  private errors: any = {};

  private fieldsProps: any[] = [];

  private initialValues: any = {};

  private callbacks: any = {};

  private forceRootUpdate: () => void;

  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  public getForm = () => ({
    getFieldError: this.getFieldError,
    getFieldsError: this.getFieldsError,
    getFieldValue: this.getFieldValue,
    getFieldsValue: this.getFieldsValue,
    setFieldsValue: this.setFieldsValue,
    resetFields: this.resetFields,
    validateFields: this.validateFields,
    submit: this.submit,

    getInternalHooks: this.getInternalHooks,
  });

  private setInitialValues = (initialValues: any) => {
    this.initialValues = initialValues;
  };

  private getFieldValue = (name: string) => {
    return this.store?.[name];
  };

  private getFieldsValue = () => {
    return this.store;
  };

  private resetFields = (value: any) => {
    const val = value && typeof value === 'object' ? value : null;
    this.initStore(val || this.initialValues);
    this.forceRootUpdate();
  };

  private setFieldsValue = (values: any) => {
    this.store = Object.assign({}, this.store, values);
    this.forceRootUpdate();
  };

  private validateFields = () => {
    const [fieldRulesObj, nullValuesObj] = this.getFieldRuleObjects();

    let isPassed = true;
    const errorState: any = {};
    const errorFields: any = {};
    const names = Object.keys(this.store);

    for (let i = 0; i < names.length; i += 1) {
      const name = names[i];
      const value = this.store[name];
      const rules = fieldRulesObj[name];
      if (rules) {
        const [isvalidateRulesPassed, fieldValue, fieldState] = validateRules(name, value, rules);
        if (!isvalidateRulesPassed) {
          errorFields[name] = fieldValue;
          errorState[name] = fieldState;
          isPassed = false;
        }
      }
    }

    return [isPassed, errorState, errorFields, nullValuesObj];
  };

  private getFieldError = (name: string) => {
    return this.errors?.[name];
  };

  private getFieldsError = () => {
    return this.errors;
  };

  private submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks;

    const [isPassed, errorState, errorFields, nullValuesObj] = this.validateFields();

    if (!isPassed) {
      this.setErrors({ ...errorState });
      this.forceRootUpdate();
      onFinishFailed?.(this.store, errorFields);
      return;
    }
    if (isPassed) {
      this.setErrors(nullValuesObj);
      this.forceRootUpdate();
    }

    onFinish?.(this.store);
  };

  private getInternalHooks = (key: string) => {
    if (key === HOOK_KEY) {
      return {
        initStore: this.initStore,
        setCallbacks: this.setCallbacks,
        setErrors: this.setErrors,
        registerField: this.registerField,
      };
    }
  };

  private setCallbacks = (callbacks: any) => {
    this.callbacks = Object.assign({}, this.callbacks, callbacks);
  };

  private initStore = (initialValues: any) => {
    this.setInitialValues(initialValues);
    const [, nullValuesObj] = this.getFieldRuleObjects();
    // 不能用下面这句，因为第一个参数是{}, 这就会导致返回的是一个新的对象（引用变了）
    // return Object.assign({}, nullValuesObj, this.initialValues);
    const newStore = Object.assign(this.store, nullValuesObj, this.initialValues);
    const newError = Object.assign(this.errors, nullValuesObj);

    this.store = newStore;
    this.errors = newError;
  };

  private setErrors = (errors: any) => {
    this.errors = Object.assign({}, this.errors, errors);
    this.forceRootUpdate();
  };

  private getFieldRuleObjects = () => {
    const rules = this.fieldsProps.map((i: any) => ({
      name: i?.name,
      rules: i?.rules,
    }));
    const fieldRulesObj: any = {};
    const nullValuesObj: any = {};
    rules.forEach(i => {
      if (i.name && i.rules && Array.isArray(i.rules)) {
        fieldRulesObj[i.name] = i.rules;
        nullValuesObj[i.name] = undefined;
      }
    });
    return [fieldRulesObj, nullValuesObj];
  };

  private registerField = (fieldProps: any) => {
    this.fieldsProps.push(fieldProps);
  };
}

function useForm(form?: any) {
  const formRef = useRef<any>();

  const [, forceUpdate] = useState({});
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const forceReRender = () => {
        forceUpdate({});
      };
      const formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

export default useForm;
