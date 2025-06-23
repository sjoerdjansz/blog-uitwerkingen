import { InputField } from "../components/InputField.jsx";
import "./NewPost.css";
import { useState } from "react";
import { calcReadTime } from "../helpers/readTime.js";
import { Link } from "react-router-dom";
import { ThumbsUpIcon } from "@phosphor-icons/react";
import axios from "axios";

export function NewPost() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [blogId, setBlogId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    fullName: "",
    content: "",
    author: "Sjoerd Jansz",
    created: "",
    readTime: 0,
    comments: 0,
    shares: 0,
  });

  async function addBlog(data) {
    try {
      const result = await axios.post(
        `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts`,
        data,
        {
          headers: {
            "novi-education-project-id": "6528bba2-b1b4-4ab4-beb8-01354a92c74e",
            "Content-Type": "application/json",
          },
        },
      );
      console.log(result);
      setBlogId(result.data.id);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const adjustedFormData = {
      ...formData,
      created: new Date().toISOString(),
      readTime: calcReadTime(formData.content),
    };

    try {
      await addBlog(adjustedFormData);

      setFormData({
        title: "",
        subtitle: "",
        fullName: "",
        content: "",
        author: "Sjoerd Jansz",
        created: "",
        readTime: 0,
        comments: 0,
        shares: 0,
      });
      setSuccess(true);
      console.log(formData);
    } catch (error) {
      console.error("error in catch from handle submit " + error);
      setError(true);
    }
  }

  return (
    <div className="newpost-container">
      <h1>New Post</h1>
      {error && <p className="error">Something went wrong</p>}

      {success && (
        <div className="succes-message">
          <ThumbsUpIcon size={24} />
          De blogpost is succesvol toegevoegd. Je kunt deze
          <Link to={`/blogs/${blogId}`}>hier bekijken.</Link>
        </div>
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputField
          name="title"
          type="text"
          label="Titel"
          onChange={handleChange}
          value={formData.title}
        />
        <InputField
          name="subtitle"
          type="text"
          label="Subtitel"
          onChange={handleChange}
          value={formData.subtitle}
        />
        <InputField
          name="fullName"
          type="text"
          label="First and last name"
          onChange={handleChange}
          value={formData.fullName}
        />
        <div className="textarea-field-wrapper">
          <label htmlFor="content">content</label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            minLength="300"
            maxLength="2000"
            onChange={handleChange}
            value={formData.content}
          ></textarea>
          <button className="submit-button" type="submit">
            Plaatsen
          </button>
        </div>
      </form>
    </div>
  );
}
