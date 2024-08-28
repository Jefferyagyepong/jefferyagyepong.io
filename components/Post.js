import React from "react";
import Image from "next/image";
const Post = ({ post: { title,
p1,
p2,
p3,
p4,
p5,
p6,
p7,
p8,
p9,
p10,
p11, imgUrl}, index }) => {
  return (
    <div className="fluid-container-align-left">
      <h1 >{title}</h1>
      <Image       
        src={imgUrl}
        alt="post"
        width={80}
        height={78}
      />
      <p className="article-para">{p1}</p>
  
  <p className="article-para">{p2}</p>
  <p className="article-para">{p3}</p>
  <p className="article-para">{p4}</p>
  <p className="article-para">{p5}</p>
  <p className="article-para">{p6}</p>
  <p className="article-para">{p7}</p>
  <p className="article-para">{p8}</p>
  <p className="article-para">{p9}</p>
  <p className="article-para">{p10}</p>
  <p className="article-para">{p11}</p>
    </div>
  );
};
export default Post;
