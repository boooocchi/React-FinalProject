import React from "react";

import style from "styled-components";

const Post = ({ image, content, user }) => {
  const WRAPPER = style.div`
border: orangered 1px solid;
padding:1rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  jusify-content:center;
  margin:1.5rem;
  color:white;
  font-family:sans-serif;
  p{
    margin:1rem 0 .3rem;
  }
  div{
    margin-left:auto;
    
  }
  `;

  const IMG = style.img`
  width:100%;
  `;
  console.log(image);
  return (
    <WRAPPER>
      {image && (
        <IMG
          src={URL.createObjectURL(image)}
          alt="post-cover"
          style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <p>{content}</p>
      <div>user name: {user}</div>
    </WRAPPER>
  );
};

export default Post;
