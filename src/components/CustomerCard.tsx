import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer, Customer } from "../features/customerSlice";

const CustomerCard = ({ id, name, food }: Customer) => {
  const [foodName, setFoodName] = useState<string>("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <button
            onClick={() => {
              if (!foodName) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: foodName,
                })
              );
              setFoodName("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
