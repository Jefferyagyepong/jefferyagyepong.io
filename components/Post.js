import React from "react";
import Image from "next/image";
const Post = ({ post: { title,
pOne,
pTwo,
pThree,
PFour,
PFive,
pSix,
pSeven,
pEight,
pNine,
pTen,
pEleven, imgUrl}, index }) => {
  return (
    <div className="fluid-container-align-left">
      <h1 >{title}</h1>
      <Image       
        src={imgUrl}
        alt="post"
        width={80}
        height={78}
      />
      <p className="article-para">{pOne}</p>
  
  <p className="article-para">{pTwo}</p>
  <p className="article-para">{pThree}</p>
  <p className="article-para">{pFour}</p>
  <p className="article-para">{pFive}</p>
  <p className="article-para">{pSix}</p>
  <p className="article-para">{pSeven}</p>
  <p className="article-para">{pEight}</p>
  <p className="article-para">{pNine}</p>
  <p className="article-para">{pTen}</p>
  <p className="article-para">{pEleven}</p>
    </div>
  );
};
export default Post;
