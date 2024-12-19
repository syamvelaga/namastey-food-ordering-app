import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";

const Cart = () => {
  const cartItemsList = useSelector((state) => state?.cart?.items) || [];
  //   const isCartCheck = useSelector((state) => state?.cart?.isCart);
  //   console.log(cartItemsList, isCartCheck);

  const emptyCart = () => {
    return (
      <div className="h-[400px] flex flex-col justify-center items-center">
        <div>
          <img src="https://res.cloudinary.com/dz99zrns4/image/upload/v1734030568/Screenshot_2024-12-13_003348_wwznhs.png" />
        </div>

        <h1 className="font-bold text-3xl">Your cart is empty</h1>
        <p className="font-bold my-4">
          You can go to home page to view more restaurants
        </p>
        <p>
          Good food is always cooking! Go ahead, order some yummy items from the
          menu.
        </p>
      </div>
    );
  };

  return (
    <div className="pl-16 pr-16 pt-28 z-0 flex justify-center">
      <div className="w-7/12 ">
        {cartItemsList.length === 0
          ? emptyCart()
          : cartItemsList.map((addedItem, i) => (
              <ItemsList mode="Cart" key={i} item={addedItem} />
            ))}
      </div>
    </div>
  );
};

export default Cart;
