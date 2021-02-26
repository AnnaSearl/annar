import InternalFilter from './filter';
import Item from './item';

type InternalFilterType = typeof InternalFilter;
interface FilterInterface extends InternalFilterType {
  Item: typeof Item;
}

const Filter = InternalFilter as FilterInterface;

Filter.Item = Item;

export default Filter;
