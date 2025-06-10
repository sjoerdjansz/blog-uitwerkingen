import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import blogs from "../constants/data.json";
import { formatDate } from "../helpers/formatDate.js";
import "./Blogpost.css";

export function Blogpost() {
  const { blogId } = useParams();

  const {
    title,
    subtitle,
    author,
    created,
    content,
    comments,
    shares,
    readTime,
  } = blogs.find((blog) => blog.id.toString() === blogId);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>
        Geschreven door {author} op {formatDate(created)}
      </p>
      <p>Leestijd: {readTime} minuten</p>
      <p>{content}</p>
      <p>
        {comments} reacties - {shares} keer gedeeld
      </p>
      <Link className="link" to="/blogs">
        Terug naar overzichtspagina
      </Link>
    </div>
  );
}
