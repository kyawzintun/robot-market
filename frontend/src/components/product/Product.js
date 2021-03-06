import { useDispatch } from "react-redux";
import { formatDate, formatCurrency } from "@utils";
import { addToCart, useGetRobotsFromCart } from "@app/slices/cartSlice";
import { classNames, showErrorToast } from "@components/lib";

const findRobotFromCart = (robots, selectedRobot) => {
  return robots.find((r) => r.name === selectedRobot.name);
};

const isDifferentRobotAddedMoreThanFive = (robots, selectedRobot) => {
  const sameTypes = robots.filter((r) => r.material === selectedRobot.material);
  return sameTypes.length >= 5 ? true : false;
};

export function Product({ robot }) {
  const dispatch = useDispatch();
  const [robots] = useGetRobotsFromCart();

  const handleAddToCart = (selectedRobot) => {
    const existingRobot = findRobotFromCart(robots, selectedRobot);

    if (existingRobot && existingRobot.quantity >= selectedRobot.stock) {
      showErrorToast("This robot is out of stock!");
      return;
    }

    if (
      !existingRobot &&
      isDifferentRobotAddedMoreThanFive(robots, selectedRobot)
    ) {
      showErrorToast("You can only add up to 5 different robots to cart!");
      return;
    }

    dispatch(addToCart(selectedRobot));
  };

  return (
    <div className="group relative z-auto">
      <div className="w-full relative min-h-300 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
        <img
          src={robot.image}
          alt={robot.name}
          loading="lazy"
          className="w-full h-full object-center object-cover transform transition duration-500 hover:scale-125 lg:w-full lg:h-full"
        />
        <div className="absolute text-gray-700 bg-white py-3 px-3 top-0 left-0 text-3xl text-right leading-4">
          {formatCurrency(robot.price)}
        </div>
      </div>
      <div className="mt-1 flex justify-between">
        <div>
          <h3 className="font-medium text-gray-500">{robot.name}</h3>
          <p className="text-gray-500">{robot.material}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500">
            In stock <span className="text-gray-500">{robot.stock}</span>
          </p>
          <p className="text-gray-500">{formatDate(robot.createdAt)}</p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(robot)}
        disabled={!robot.stock}
        className={classNames(
          robot.stock
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
