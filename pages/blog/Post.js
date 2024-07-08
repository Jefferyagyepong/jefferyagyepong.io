import React from "react";
import Image from "next/image";
const Post = ({ post: { title, body, imgUrl, author, date }, index }) => {
  return (
    <div>
      <Image src={imgUrl} alt="post" width={100} height={120} />
      <div className="blog-footer">
        <p>{author}</p>
        <p>{date}</p>
      </div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
export default Post;
