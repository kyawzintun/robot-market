import { Link, useMatch } from "react-router-dom";
import { toast } from "react-toastify";

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

function showErrorToast(msg) {
  toast.error(msg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export { NavLink, classNames, showErrorToast };
