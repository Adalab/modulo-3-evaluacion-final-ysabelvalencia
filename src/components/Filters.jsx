import FilterByYear from './FIlterByYear';
import FilterByTitle from './FilterByTitle';

const Filters = () => {
  return (
    <form>
      <FilterByTitle />
      <FilterByYear />
    </form>
  );
};

export default Filters;
