import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import Bookmark from "./Bookmark";
import ReadTime from "./ReadTime";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [timeCount, setTimeCount] = useState([]);

  useEffect(() => {
    fetch("Knowledge-data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const readsTime = (time) =>{
    const blogReadTime = [...timeCount,time]
    setTimeCount(blogReadTime);
  }

  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} readsTime={readsTime}></Blog>
        ))}
      </div>
      <div className="md:my-8">
        <div className="sticky md:top-20">
          <ReadTime timeCount={timeCount}></ReadTime>
          <Bookmark></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default Main;
