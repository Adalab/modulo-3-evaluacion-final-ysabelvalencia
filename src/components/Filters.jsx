import FilterByYear from './FilterByYear';
import FilterByTitle from './FilterByTitle';

const Filters = ({
  titleFilter,
  handleChangeInput,
  yearFilter,
  handleChangeSelect,
  years,
}) => {
  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <FilterByTitle
        titleFilter={titleFilter}
        handleChangeInput={handleChangeInput}
      />

      <FilterByYear
        yearFilter={yearFilter}
        handleChangeSelect={handleChangeSelect}
        years={years}
      />
    </form>
  );
};

export default Filters;
