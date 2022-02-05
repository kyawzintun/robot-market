import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { classNames } from "@components/lib";

function MenuItem({ filterName, handleClick, filterBy }) {
  return (
    <Menu.Item onClick={() => handleClick(filterName)}>
      {({ active }) => (
        <Link
          to="#"
          className={classNames(
            filterBy === filterName
              ? "font-medium text-gray-900"
              : "text-gray-500",
            active ? "bg-gray-100" : "",
            "block px-4 py-2 text-sm"
          )}
        >
          {filterName}
        </Link>
      )}
    </Menu.Item>
  );
}

export function FilterDropdown({ filters, filterBy, setFilterBy }) {
  const handleClick = (selectedType) => setFilterBy(selectedType);

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left z-50">
        <div>
          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
            <span className="text-gray-500 text-sm whitespace-pre">
              Filter By:{" "}
            </span>
            {filterBy}
            <ChevronDownIcon
              className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem
                filterName="All"
                filterBy={filterBy}
                handleClick={handleClick}
              />

              {filters.map((filterName) => (
                <MenuItem
                  key={filterName}
                  filterName={filterName}
                  filterBy={filterBy}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
