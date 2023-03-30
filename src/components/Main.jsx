import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Main = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Knowledge-data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>
      <div className="md:my-8">
        <div className="sticky md:top-20">
          <div className="bg-[#6047ec1a] rounded-xl">
            <h2 className="py-5 px-8 text-[#6047EC] text-2xl font-bold">
              Spent time on read : 177 min
            </h2>
          </div>
          <div className="bg-[#6047ec1a] rounded-xl my-6">
            <h3 className="py-5 px-4 font-bold text-2xl">Bookmarked Blogs : </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
