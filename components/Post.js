import React from "react";
import Image from "next/image";
const Post = ({ post: { title,imgUrl }, index }) => {
  return (
    <div className="fluid-container-align-left">
      <h3>{title}</h3>
      <Image src={imgUrl} alt="post" width={80} height={78} />
    
    </div>
  );
};
export default Post;
