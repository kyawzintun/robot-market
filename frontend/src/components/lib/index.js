import { Link, useMatch } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavLink({ to, customstyle, ...props }) {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={classNames(
        match ? "text-blue-500" : "text-gray-500",
        `text-base font-medium hover:text-blue-500 ${customstyle}`
      )}
      {...props}
    />
  );
}

export { NavLink };
