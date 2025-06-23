import { Card } from "../components/Card.jsx";
import "./BlogOverview.css";
import axios from "axios";
import { useEffect, useState } from "react";

export function BlogOverview() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBlogs("blogposts", "");
  }, []);

  // get all blogs
  async function getBlogs(url, id) {
    try {
      const { data } = await axios.get(
        `https://novi-backend-api-wgsgz.ondigitalocean.app/api/${url}/${id}`,
        {
          headers: {
            "novi-education-project-id": "6528bba2-b1b4-4ab4-beb8-01354a92c74e",
          },
        },
      );
      setBlogs(data);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  // add single blog
  async function addBlog() {
    try {
      const result = await axios.post(
        `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts`,
        {
          title: "Wat gebruiker heeft ingevuld",
          subtitle: "Wat gebruiker heeft ingevuld",
          content:
            "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
          author: "Voornaam achternaam",
          created: "2023-09-21T09:30:00Z",
          readTime: 1,
          comments: 0,
          shares: 0,
        },
        {
          headers: {
            "novi-education-project-id": "6528bba2-b1b4-4ab4-beb8-01354a92c74e",
            "Content-Type": "application/json",
          },
        },
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  // delete single blog
  async function deleteBlog(id) {
    try {
      const result = await axios.delete(
        `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`,
        {
          headers: {
            "novi-education-project-id": "6528bba2-b1b4-4ab4-beb8-01354a92c74e",
          },
        },
      );
      console.log(result);
    } catch (error) {
      console.error(error);
      console.log("Blog is al verwijderd");
    }
  }

  // edit blog
  async function editBlog(id) {
    try {
      const result = await axios.patch(
        `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`,
        {
          title: "Ik ben een aangepaste post, woohoo!",
          subtitle: "Aangepast dus!",
          content:
            "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
          author: "Voornaam achternaam",
          created: "2023-09-21T09:30:00Z",
          readTime: 1,
          comments: 20,
          shares: 99,
        },
        {
          headers: {
            "novi-education-project-id": "6528bba2-b1b4-4ab4-beb8-01354a92c74e",
            "Content-Type": "application/json",
          },
        },
      );
      console.log(`Blog edited: ${result}`);
    } catch (error) {
      console.error(error);
      console.log("Something went wrong");
    }
  }

  return (
    <>
      <h1>Blog Overview</h1>
      {error && <p>Oopsie!</p>}
      {/* te moe voor styling of een button component. Even zo gedaan*/}
      <button type="button" onClick={() => getBlogs("blogposts", "")}>
        Get all blogs
      </button>
      <button type="button" onClick={() => getBlogs("blogposts", "6")}>
        Get blog ID 6
      </button>
      <button type="button" onClick={() => addBlog()}>
        Post blog
      </button>
      <button type="button" onClick={() => deleteBlog("13")}>
        Delete blog
      </button>
      <button type="button" onClick={() => editBlog("2")}>
        Edit blog
      </button>
      <section className="blog-container">
        {/* Niet zo handig/error proof, I know */}
        {blogs.length > 1 &&
          blogs.map((blog) => {
            return (
              <Card
                key={blog.id}
                author={blog.author}
                title={blog.title}
                comments={blog.comments}
                shares={blog.shares}
                date={blog.created}
                blogId={blog.id}
                blogs={blogs}
              />
            );
          })}
      </section>
    </>
  );
}
