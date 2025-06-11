import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import blogs from "../constants/data.json";
import { formatDate } from "../helpers/formatDate.js";
import "./Blogpost.css";
import { CaretDoubleLeftIcon } from "@phosphor-icons/react";

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
    <>
      <div className="blogpost-page-container">
        <article>
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
            <CaretDoubleLeftIcon size={20} />
            Terug naar overzichtspagina
          </Link>
        </article>
      </div>
    </>
  );
}
