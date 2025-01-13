import React from "react";
import Image from "next/image";
<<<<<<< HEAD
const Post = ({ post: { title,imgUrl }, index }) => {
=======
const Post = ({ post: { title,p1, p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14, p15, p16,p17,p18,imgUrl}, index }) => {
>>>>>>> a00e0aa65cd884b83b59b38951bb30e8ece201ff
  return (
    <div className="fluid-container-align-left">
      <h3>{title}</h3>
      <Image src={imgUrl} alt="post" width={80} height={78} />
<<<<<<< HEAD
    
=======
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
      <p>{p14}</p>
      <p>{p15}</p>
      <p>{p16}</p>
      <p>{p17}</p>
      <p>{p18}</p>
>>>>>>> a00e0aa65cd884b83b59b38951bb30e8ece201ff
    </div>
  );
};
export default Post;
