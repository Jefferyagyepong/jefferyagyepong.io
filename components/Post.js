import React from "react";
import Image from "next/image";
const Post = ({ post: { title,imgUrl,
paragraph_1,
paragraph_2,
paragraph_3,
paragraph_4,
paragraph_5,
paragraph_6,
paragraph_7,
paragraph_8,
paragraph_9,
paragraph_10,
paragraph_11, }, index }) => {
  return (
    <div className="fluid-container-align-left">
      <h1 >{title}</h1>
      <Image       
        src={imgUrl}
        alt="post"
        width={80}
        height={78}
      />
      <p className="article-para">{paragraph_1}</p>
  <p className="article-para">{paragraph_1}</p>
  <p className="article-para">{paragraph_2}</p>
  <p className="article-para">{paragraph_3}</p>
  <p className="article-para">{paragraph_4}</p>
  <p className="article-para">{paragraph_5}</p>
  <p className="article-para">{paragraph_6}</p>
  <p className="article-para">{paragraph_7}</p>
  <p className="article-para">{paragraph_8}</p>
  <p className="article-para">{paragraph_9}</p>
  <p className="article-para">{paragraph_10}</p>
  <p className="article-para">{paragraph_11}</p>
    </div>
  );
};
export default Post;
