import { useParams } from "react-router";

function Borrow() {
  const params = useParams();
  const id = params.bookId;
  return <h1>id: {id}</h1>;
}

export default Borrow;
