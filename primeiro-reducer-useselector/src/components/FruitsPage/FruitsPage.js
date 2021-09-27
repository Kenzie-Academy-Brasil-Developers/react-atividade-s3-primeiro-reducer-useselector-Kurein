import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../../store/modules/fruits/actions";

function FruitsPage() {
  const [fruit, setFruit] = useState("");

  const dispatch = useDispatch();

  const fruits = useSelector((state) => state.fruits);

  function handleAddFruit() {
    dispatch(addFruit(fruit));
  }

  return (
    <div>
      <input value={fruit} onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleAddFruit}>Adicionar Fruta</button>

      {fruits.map((element) => (
        <p key={element}>{element}</p>
      ))}
    </div>
  );
}

export default FruitsPage;
