import { SearchManuFacturerProps } from "@/types/types";
import { Combobox } from "@headlessui/react";

const SearchMenufacture = ({
  manufacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div>
          {/* when user will click on the button he will view the full list of car */}
          <Combobox.Button></Combobox.Button>
          <Combobox.Input />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMenufacture;
