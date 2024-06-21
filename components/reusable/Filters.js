import { useRouter } from "next/router";

const FiltersComponent = ({ isChecked }) => {
  const router = useRouter();
  const { query } = router;

  const addFilter = (filterName, filterValue) => {
    const currentValues = query[filterName] ? [].concat(query[filterName]) : [];
    const newValues = [...new Set([...currentValues, filterValue])]; // Ensure unique values
    router.push({
      pathname: router.pathname,
      query: { ...query, [filterName]: newValues },
    });
  };

  const removeFilter = (filterName, filterValue) => {
    const currentValues = query[filterName] ? [].concat(query[filterName]) : [];
    const newValues = currentValues.filter((value) => value !== filterValue);
    const newQuery = { ...query, [filterName]: newValues };
    if (newValues.length === 0) {
      delete newQuery[filterName];
    }
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked, value } = event.target;
    if (checked) {
      addFilter(name, value);
    } else {
      removeFilter(name, value);
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="filter1"
          value="value1"
          onChange={handleCheckboxChange}
          checked={query.filter1 && query.filter1.includes("value1")}
        />
        Filter 1 - Value 1
      </label>
      <label>
        <input
          type="checkbox"
          name="filter1"
          value="value2"
          onChange={handleCheckboxChange}
          checked={query.filter1 && query.filter1.includes("value2")}
        />
        Filter 1 - Value 2
      </label>
      <label>
        <input
          type="checkbox"
          name="filter2"
          value="value1"
          onChange={handleCheckboxChange}
          checked={query.filter2 && query.filter2.includes("value1")}
        />
        Filter 2 - Value 1
      </label>
    </div>
  );
};

// -------------or-----------------

const handleCheckboxChange = (event, filterName, filterValue) => {
  const { checked } = event.target;
  if (checked) {
    addFilter(filterName, filterValue);
  } else {
    removeFilter(filterName, filterValue);
  }
};

return (
  <div>
    {filters.map((filter, index) => (
      <label key={index}>
        <input
          type="checkbox"
          name={filter.name}
          value={filter.value}
          onChange={(event) =>
            handleCheckboxChange(event, filter.name, filter.value)
          }
          checked={
            query[filter.name] && query[filter.name].includes(filter.value)
          }
        />
        {filter.label}
      </label>
    ))}
  </div>
);

export async function getServerSideProps(context) {
  const { query } = context;
  const isChecked = query.checked === "true";
  return {
    props: {
      isChecked,
    },
  };
}

export default FiltersComponent;
