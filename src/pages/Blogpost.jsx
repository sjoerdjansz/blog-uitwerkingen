import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { formatDate } from "../helpers/formatDate.js";
import "./Blogpost.css";
import { CaretDoubleLeftIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import axios from "axios";

export function Blogpost() {
  const [blog, setBlog] = useState({});
  const { blogId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBlog("blogposts", blogId);
  }, [blogId]);

  async function getBlog(url, id) {
    try {
      const { data } = await axios.get(
        `https://novi-backend-api-wgsgz.ondigitalocean.app/api/${url}/${id}`,
        {
          headers: {
            "novi-education-project-id": "6528bba2-b1b4-4ab4-beb8-01354a92c74e",
          },
        },
      );
      setBlog(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBlog(url, id) {
    try {
      const { data } = await axios.delete(
        `https://novi-backend-api-wgsgz.ondigitalocean.app/api/${url}/${id}`,
        {
          headers: {
            "novi-education-project-id": "6528bba2-b1b4-4ab4-beb8-01354a92c74e",
          },
        },
      );
      console.log(data);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
    }
  }

  // Voor deel 1 op deze manier gewerkt
  // const {
  //   title,
  //   subtitle,
  //   author,
  //   created,
  //   content,
  //   comments,
  //   shares,
  //   readTime,
  // } = blogs.find((blog) => blog.id.toString() === blogId);

  return (
    <>
      <div className="blogpost-page-container">
        <article>
          <h1>{blog.title}</h1>
          <h2>{blog.subtitle}</h2>
          <p>
            Geschreven door {blog.author} op {formatDate(blog.created)}
          </p>
          <p>Leestijd: {blog.readTime} minuten</p>
          <p>{blog.content}</p>
          <p>
            {blog.comments} reacties - {blog.shares} keer gedeeld
          </p>
          <Link className="link" to="/blogs">
            <CaretDoubleLeftIcon size={20} />
            Terug naar overzichtspagina
          </Link>
          <button
            type="button"
            onClick={() => {
              deleteBlog("blogposts", blogId);
            }}
          >
            Delete
          </button>
        </article>
      </div>
    </>
  );
}
