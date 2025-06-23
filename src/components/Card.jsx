import "./Card.css";
import { Link } from "react-router-dom";
import { formatDate } from "../helpers/formatDate.js";

export function Card({ title, author, comments, shares, date, blogId }) {
  return (
    <article className="card">
      <div className="card__title-container">
        <Link className="link" to={`/blogs/${blogId}`}>
          {title}
        </Link>
        <p>({author})</p>
      </div>
      <div className="card__content-container">
        <p>
          {comments} reacties – {shares} keer gedeeld
        </p>
        <p>Published: {formatDate(date)}</p>
      </div>
    </article>
  );
}
