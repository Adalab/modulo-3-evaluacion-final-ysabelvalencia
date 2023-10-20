import FilterByYear from './FIlterByYear';
import FilterByTitle from './FilterByTitle';

const Filters = ({ titleFilter, handleChangeInput }) => {
  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <FilterByTitle
        titleFilter={titleFilter}
        handleChangeInput={handleChangeInput}
      />

      <FilterByYear />
    </form>
  );
};

export default Filters;
