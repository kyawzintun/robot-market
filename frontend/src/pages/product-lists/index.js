import * as React from "react";
import { FilterIcon } from "@heroicons/react/solid";
import { Product, MobileFilterDialog, FilterForm } from "@components/product";
import { useGetRobotsQuery } from "@app/api/apiSlice";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "35",
//     color: "Black",
//   },
//   {
//     id: 2,
//     name: "Simple Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "5000",
//     color: "Black",
//   },
// ];

const filters = [
  { value: "new-arrivals", label: "New Arrivals", checked: false },
  { value: "sale", label: "Sale", checked: false },
  { value: "travel", label: "Travel", checked: true },
  { value: "organization", label: "Organization", checked: false },
  { value: "accessories", label: "Accessories", checked: false },
];

export default function CategoryFilters() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  const {
    data: products,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetRobotsQuery();

  console.log("robots ", products);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white">
          <main className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <section className="pt-3 lg:pt-6 pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-10 gap-y-5 lg:gap-y-10">
                {/* Filters */}
                <form className="hidden lg:block">
                  <FilterForm filters={filters} />
                </form>

                {/* Filters icon for mobile view */}
                <button
                  type="button"
                  className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <FilterIcon className="w-5 h-5" aria-hidden="true" />
                </button>

                {/* Product grid */}
                <div className="lg:col-span-5">
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                      <Product key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Mobile filter dialog */}
          <MobileFilterDialog
            filters={filters}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />
        </div>
      )}
    </>
  );
}
