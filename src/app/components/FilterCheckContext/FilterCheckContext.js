import { useAppContext } from "@/app/contexts/AppContexts";

const FilterCheckContext = () => {
  const { filter, setFilter } = useAppContext();

  if (filter.length != 0) {
    console.log(filter);
  }
  return <div>FilterCheckContext</div>;
};

export default FilterCheckContext;
