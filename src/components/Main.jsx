import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import Bookmark from "./Bookmark";
import ReadTime from "./ReadTime";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [timeCount, setTimeCount] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("Knowledge-data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const readsTime = (time) =>{
    const blogReadTime = [...timeCount,time]
    setTimeCount(blogReadTime);
  }

  const bookmarkedBlogs = (bookmark) =>{
      const bookmarkItem = [...bookmarks, bookmark];
      setBookmarks(bookmarkItem);
      toast.success("You Have Already Bookmarked This Blog");
  }

  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} readsTime={readsTime} bookmarkedBlogs={bookmarkedBlogs}>
          </Blog>
        ))}
        <ToastContainer />
      </div>
      <div className="md:my-8">
        <div className="sticky md:top-20">
          <ReadTime timeCount={timeCount}></ReadTime>
          <Bookmark bookmarks={bookmarks}></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default Main;
