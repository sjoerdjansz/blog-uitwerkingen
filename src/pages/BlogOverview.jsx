import { Card } from "../components/Card.jsx";
import blogs from "../constants/data.json";
import "./BlogOverview.css";

export function BlogOverview() {
  return (
    <>
      <h1>Blog Overview</h1>
      <section className="blog-container">
        {blogs.map((blog) => {
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
