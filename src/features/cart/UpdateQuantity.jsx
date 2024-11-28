import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreasePizzaQuantity, increasePizzaQuantity } from "./cartSlice";

function UpdateQuantity({ pizzaId, display, tempQuantity, setTempQuantity }) {
  const dispatch = useDispatch();

  function handleIncQuantity() {
    setTempQuantity((cur) => cur + 1);
    !display && dispatch(increasePizzaQuantity(pizzaId));
  }

  function handleDecQuantity() {
    if (display && tempQuantity > 0) setTempQuantity((cur) => cur - 1);
    !display && dispatch(decreasePizzaQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-2 tablet:gap-3">
      <Button type="round" onClick={handleIncQuantity}>
        +
      </Button>
      {display && <span>{tempQuantity}</span>}
      <Button type="round" onClick={handleDecQuantity}>
        -
      </Button>
    </div>
  );
}

export default UpdateQuantity;
