import InternalForm from './form';
import Item from './item';
import useForm from './useForm';

type InternalFormType = typeof InternalForm;
interface FormInterface extends InternalFormType {
  Item: typeof Item;
  useForm: typeof useForm;
}

const Form = InternalForm as FormInterface;

Form.Item = Item;
Form.useForm = useForm;

export default Form;
