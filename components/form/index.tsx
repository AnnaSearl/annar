import InternalForm from './form';
import Item from './item';

type InternalFormType = typeof InternalForm;
interface FormInterface extends InternalFormType {
  Item: typeof Item;
}

const Form = InternalForm as FormInterface;

Form.Item = Item;

export default Form;
