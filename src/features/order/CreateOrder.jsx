import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearCart, getTotalCartSum } from "../cart/cartSlice";
import Button from "../../ui/Button";
import store from "../../store";
import { formatCurrency } from "../../utilities/helpers";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const totalCartSum = useSelector(getTotalCartSum);
  const priorityPrice = totalCartSum * 0.2;
  const {
    username,
    address,
    status: locationStatus,
    position,
  } = useSelector((state) => state.user);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="POST">
        <div className="mb-6 flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-4">
          <label className="tablet:basis-32">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-6 flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-4">
          <label className="tablet:basis-32">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="absolute pl-2 text-red-600">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-4">
          <label className="tablet:basis-32">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              defaultValue={address}
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <input
            className="h-5 w-5 accent-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority? (plus{" "}
            {formatCurrency(priorityPrice)})
          </label>
        </div>

        <div className="mt-6">
          <Button disabled={isSubmitting} type="small">
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(withPriority ? totalCartSum + priorityPrice : totalCartSum)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const cart = store.getState().cart.cart;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: cart,
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please enter a valid phone number";
    return errors;
  }

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
