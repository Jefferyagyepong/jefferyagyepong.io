import React from "react";
import Image from "next/image";
const Post = ({ post: { title,p1, p2,p3,p4,p5,p6,p7,p8,p9,p10,imgUrl,phead}, index }) => {
  return (
    <div className="fluid-container-align-left">
      <h3>{title}</h3>
      <Image src={imgUrl} alt="post" width={80} height={78} />
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
      <p>{p5}</p>
      <p>{p6}</p>
      <p>{p7}</p>
      <p>{p8}</p>
      <p>{p9}</p>
      <p>{p10}</p>
       <p>{p11}</p>
       <p>{p12}</p>
       <p>{p13}</p>
      <h6>{phead}</h6>
    </div>
  );
};
export default Post;
