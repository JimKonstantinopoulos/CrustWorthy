import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center tablet:my-16">
      <h1 className="mb-8 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <div>
          <p className="pb-10 pt-3">
            Already got your name, feel free to browse our delicious pizzas
          </p>
          <Button to="/menu" type="primary">
            to menu
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;
