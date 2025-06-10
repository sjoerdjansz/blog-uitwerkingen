import { useParams } from "react-router-dom";

export function Blogpost() {
  const { blogId } = useParams();
  return (
    <div>
      <h1>Unieke Blogpost Page</h1>
      <p>Dit is de uitgelezen param: {blogId}</p>
    </div>
  );
}
