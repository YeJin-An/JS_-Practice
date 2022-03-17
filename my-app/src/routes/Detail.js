import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // React Router는 이 변수의 값을 넘겨주는 역활
  console.log({ id });
  return <h1>Detail {id}</h1>;
}

export default Detail;
