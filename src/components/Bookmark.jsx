import React from "react";

const Bookmark = ({ bookmarks }) => {
  
  return (
    <div className="bg-[#6047ec1a] rounded-xl my-6">
      <h3 className="py-5 px-4 font-bold text-2xl">
        Bookmarked Blogs : {bookmarks.length}
      </h3>
      <div className="pb-5">
        {bookmarks.map((item) => <h2 
        key={item.id}
        className="bg-white my-4 mx-7 font-semibold text-lg p-5 rounded-xl"
        >{item.blogTitle}</h2>)}
      </div>
    </div>
  );
};

export default Bookmark;
