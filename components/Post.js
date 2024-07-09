import React from "react";
import Image from "next/image";
const Post = ({ post: { title, body, imgUrl, author }, index }) => {
  return (
    <div >
      <h1 >{title}</h1>
      <Image
       
        src={imgUrl}
        alt="post"
        width={100}
        height={120}
      />
      <p>{body}</p>
      <div >
        <h4> by: {author}</h4>
      </div>
    </div>
  );
};
export default Post;
