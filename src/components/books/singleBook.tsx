import { useParams } from "react-router";

function SingleBook() {
  const params = useParams();
  const id = params.id;

  return <h1>this is single book page {id}</h1>;
}

export default SingleBook;
