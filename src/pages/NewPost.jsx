import { InputField } from "../components/InputField.jsx";
import "./NewPost.css";
import { useState } from "react";
import { calcReadTime } from "../helpers/readTime.js";
import { useNavigate } from "react-router-dom";

import { ThumbsUpIcon } from "@phosphor-icons/react";

export function NewPost() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    fullName: "",
    blogpost: "",
    created: "",
    readTime: 0,
    comments: 0,
    shares: 0,
  });
  const [succes, setSucces] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    formData.created = new Date().toISOString();
    formData.readTime = calcReadTime(formData.blogpost);

    console.log(formData);

    setSucces(true);

    setTimeout(() => {
      navigate("/blogs");
    }, 2000);
    setFormData({
      title: "",
      subtitle: "",
      fullName: "",
      blogpost: "",
      created: "",
      readTime: 0,
      comments: 0,
      shares: 0,
    });
  }

  return (
    <div className="newpost-container">
      <h1>New Post</h1>
      {succes && (
        <div className="succes-message">
          <ThumbsUpIcon size={24} />
          De blog is geplaatst!
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
          <label htmlFor="blogpost">Blogpost</label>
          <textarea
            name="blogpost"
            id="blogpost"
            cols="30"
            rows="10"
            minLength="300"
            maxLength="2000"
            onChange={handleChange}
            value={formData.blogpost}
          ></textarea>
          <button className="submit-button" type="submit">
            Plaatsen
          </button>
        </div>
      </form>
    </div>
  );
}
