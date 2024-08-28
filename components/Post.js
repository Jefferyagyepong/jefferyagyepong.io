import React from "react";
import Image from "next/image";
const Post = ({ post: { title, imgUrl }, index }) => {
  return (
    <div className="fluid-container-align-left">
      <h1 >{title}</h1>
      <Image       
        src={imgUrl}
        alt="post"
        width={80}
        height={78}
      />
      <p className="article-para"></p>

    </div>
  );
};
export default Post;
