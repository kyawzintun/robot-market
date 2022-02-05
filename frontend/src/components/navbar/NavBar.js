import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Popover } from "@headlessui/react";
import {
  ShoppingBagIcon,
  CursorClickIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { NavLink } from "@components/lib";
import { Cart } from "@components/cart";
import HamBurgerMenu from "./HamBurgerMenu";
import { selectProductsFromCart } from "@app/slices/cartSlice";
import logo from "@assets/logo.svg";

const navLinks = [
  {
    name: "SHOP",
    description: "",
    href: "/products",
    icon: ShoppingBagIcon,
  },
  {
    name: "ABOUT",
    description: "",
    href: "/about",
    icon: CursorClickIcon,
  },
  {
    name: "CONTACTS",
    description: "",
    href: "/contacts",
    icon: ShoppingCartIcon,
  },
];

export function NavBar() {
  const products = useSelector(selectProductsFromCart);
  const [cartOpen, setCartOpen] = React.useState(false);

  return (
    <Popover className="bg-white sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/products">
              <img className="h-8 w-auto sm:h-10" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navLinks.map((navLink) => (
              <NavLink key={navLink.href} to={navLink.href}>
                {navLink.name}
              </NavLink>
            ))}
          </Popover.Group>
          <div className="cursor-pointer hidden md:flex items-center justify-end md:flex-none lg:flex-1 lg:w-0">
            <div
              className="absolute group -m-2 p-2 flex items-center"
              onClick={() => setCartOpen(true)}
            >
              <span class="relative inline-block">
                <ShoppingBagIcon
                  className="flex-shrink-0 h-10 w-10 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span class="absolute top-0 right-0 px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
                  {products.length}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* HamBurger Menu For Mobile View */}
      <HamBurgerMenu navLinks={navLinks} />

      {/* Shopping Cart View */}
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </Popover>
  );
}
