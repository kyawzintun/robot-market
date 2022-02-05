import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { formatDate, formatCurrency } from "@utils";
import { addToCart, useGetProductsFromCart } from "@app/slices/cartSlice";
import { classNames } from "@components/lib";

export function Product({ product }) {
  const dispatch = useDispatch();
  const [products] = useGetProductsFromCart();

  const handleAddToCart = (selectedProduct) => {
    if (products.length >= 5) {
      toast.error("Wow so easy!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    dispatch(addToCart(selectedProduct));
  };

  return (
    <div className="group relative">
      <div className="w-full relative min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <Link key={product.id} to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
          <div className="absolute text-gray-500 py-2.5 bottom-3 right-3 font-extrabold text-3xl text-right leading-4">
            {formatCurrency(product.price)}
          </div>
        </Link>
      </div>
      <div className="mt-1 flex justify-between">
        <div>
          <h3 className="font-medium text-gray-500">{product.name}</h3>
          <p className="text-gray-500">{product.material}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500">
            In stock <span className="text-gray-500">{product.stock}</span>
          </p>
          <p className="text-gray-500">{formatDate(product.createdAt)}</p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        disabled={!product.stock}
        className={classNames(
          product.stock
            ? "text-white bg-indigo-600 hover:bg-indigo-700"
            : "text-gray-500 bg-gray-200 hover:bg-gray-300 cursor-not-allowed",
          `w-full mt-2 font-bold py-2 px-4 rounded text-center`
        )}
      >
        Add to cart
      </button>
    </div>
  );
}
