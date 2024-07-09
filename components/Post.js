import React from "react";
import Image from "next/image";
const Post = ({ post: { title, body, imgUrl }, index }) => {
  return (
    <div >
      <h1 >{title}</h1>
      <Image
       
        src={imgUrl}
        alt="post"
        width={100}
        height={120}
      />
      <p className="article-para">{body}</p>
      <div >

      </div>
    </div>
  );
};
export default Post;
