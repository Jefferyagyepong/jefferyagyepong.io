import React from "react";
import Link from "next/link";
import Image from "next/image";
const Post = ({ post: { title, body, imgUrl }, index }) => {
    return (
      <div>
        <Image src={imgUrl} alt="post" width={100} height={120} />
        <h1>{title}</h1>

        <p>{body}</p>
    
      </div>
    );
};
export default Post;