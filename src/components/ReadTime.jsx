import React from "react";

const ReadTime = (props) => {
    const readsTime = props.timeCount;
    let totalReadTime = 0;
    for (const totalRead of readsTime) {
        totalReadTime = totalReadTime + totalRead.readTime;
    }
  return (
    <div>
      <div className="bg-[#6047ec1a] rounded-xl">
        <h2 className="py-5 px-8 text-[#6047EC] text-2xl font-bold">
          Spent time on read : {totalReadTime} min
        </h2>
      </div>
    </div>
  );
};

export default ReadTime;
