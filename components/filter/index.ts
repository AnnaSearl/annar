import InternalFilter from './filter';
import Item from './item';

type InternalFilter = typeof InternalFilter;
interface Filter extends InternalFilter {
  Item: typeof Item;
}

const Filter: Filter = InternalFilter as Filter;

Filter.Item = Item;

export default Filter;
