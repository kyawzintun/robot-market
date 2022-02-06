import * as React from "react";
import { Product, FilterDropdown } from "@components/product";
import { useGetRobotsQuery } from "@app/slices/apiSlice";
import { LoadingOverlay } from "@components/loading-overlay";

const getUniqueMaterials = (robots) => [
  ...new Set(robots.map((i) => i.material)),
];

export function ProductLists() {
  const [filterBy, setFilterBy] = React.useState("All");
  const { data: robots = [], isLoading, isError, error } = useGetRobotsQuery();
  const filters = getUniqueMaterials(robots);

  const showRobotsByFilterType = robots.map((robot) => {
    if (filterBy === "All") return <Product key={robot.id} robot={robot} />;
    else if (robot.material === filterBy)
      return <Product key={robot.id} robot={robot} />;

    return null;
  });

  return (
    <div className="bg-white">
      <div className="w-full mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        {isLoading ? (
          <LoadingOverlay />
        ) : (
          <>
            <FilterDropdown
              filters={filters}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
            />
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
              {showRobotsByFilterType}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
