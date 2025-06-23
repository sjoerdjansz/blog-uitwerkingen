import "./App.css";

import { Navbar } from "./components/Navbar.jsx";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { PageNotFound } from "./pages/404.jsx";
import { BlogOverview } from "./pages/BlogOverview.jsx";
import { NewPost } from "./pages/NewPost.jsx";
import { Blogpost } from "./pages/Blogpost.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogOverview />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/blogs/:blogId" element={<Blogpost />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
