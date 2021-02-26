import React, { useEffect } from 'react';
import { Form } from 'remax/one';
import classNames from 'classnames';
import { FormContext, HOOK_KEY } from './context';
import useForm from './useForm';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('form');
export interface ErrorProps {
  error?: boolean;
  message?: string;
}

export interface FormProps {
  initialValues?: { [name: string]: any };
  form?: any;
  children?: React.ReactNode;
  onFinish?: (v: any) => void;
  onFinishFailed?: (v: any, errorFields: any) => void;
  onReset?: (v: any) => void;
}

const AnnarForm: React.FC<FormProps> = (props: FormProps) => {
  const { initialValues, form, children, onFinish, onFinishFailed, onReset } = props;

  const [formInstance] = useForm(form);

  const { setFieldsValue, submit } = formInstance;

  const { initStore, setErrors, setCallbacks } = formInstance.getInternalHooks(HOOK_KEY);

  useEffect(() => {
    initStore(initialValues);

    setCallbacks({
      onFinish,
      onFinishFailed,
    });
    // 卸载时不要忘了手动清理内存 FormStore
  }, []);

  const handleSubmit = (e: any) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();

    submit();
  };

  const handleChange = (e: any, name: string) => {
    // 适配 e.target 不存在的情况(如radio 和 checkbox), 如果 e.target 不存在则组装一个对象
    const t = e?.target || { value: e };
    setFieldsValue({ [name]: t?.value });
  };

  const handleChangeError = (v: any, name: string) => {
    setErrors({ [name]: v });
  };

  // 这里不用 useMemo 来优化，因为只有每次 providerValue 都是一个新的对象，子组件才会重新渲染（useContext收到更新通知）
  const providerValue = {
    formInstance,
    onChange: handleChange,
    onChangeError: handleChangeError,
  };

  return (
    <FormContext.Provider value={providerValue}>
      <Form className={classNames(prefixCls)} onSubmit={handleSubmit} onReset={onReset}>
        {children}
      </Form>
    </FormContext.Provider>
  );
};

export default AnnarForm;
