import { useSelector } from "react-redux";

function FruitsPage() {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((element) => (
        <p key={element}>{element}</p>
      ))}
    </div>
  );
}

export default FruitsPage;
