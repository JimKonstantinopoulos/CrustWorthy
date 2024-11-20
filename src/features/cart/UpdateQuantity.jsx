import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreasePizzaQuantity, increasePizzaQuantity } from "./cartSlice";

function UpdateQuantity({ id }) {
  const dispatch = useDispatch();

  return (
    <div className="item-center flex gap-1 tablet_w:gap-3">
      <Button type="round" onClick={() => dispatch(increasePizzaQuantity(id))}>
        +
      </Button>
      <Button type="round" onClick={() => dispatch(decreasePizzaQuantity(id))}>
        -
      </Button>
    </div>
  );
}

export default UpdateQuantity;
