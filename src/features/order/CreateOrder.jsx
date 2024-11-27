import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartSum } from "../cart/cartSlice";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const totalCartSum = useSelector(getTotalCartSum);
  const priorityPrice = totalCartSum * 0.2;
  const { username, address } = useSelector((state) => state.user);

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

export default CreateOrder;
