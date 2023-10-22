import FilterByYear from './FilterByYear';
import FilterByTitle from './FilterByTitle';

const Filters = ({
  titleFilter,
  handleChangeInput,
  yearFilter,
  handleChangeSelect,
  years,
  handleResetButton,
}) => {
  const handleReset = (ev) => {
    handleResetButton('');
  };

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

      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Filters;
