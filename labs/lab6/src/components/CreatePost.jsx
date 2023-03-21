// import React from "react";

// const CreatePost = ({ user, setPosts }) => {
//   const [content, setContent] = React.useState("");
//   const [image, setImage] = React.useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const post = { content, image, user };
//     setPosts(prevPosts => [post, ...prevPosts])
//   }
//   return (
//     <div>
//       <h1>Create New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Post Content"
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//         <button type="submit">Submit Post</button>
//       </form>
//       {/* <p>{content}</p>
//       {image && <img src={URL.createObjectURL(image)} alt="upload" style={{height: 100, width: 200, objectFit: 'cover'}} />} */}
//     </div>
//   );
// };

// export default CreatePost;

/**
 * ====================================================================
 * Clear state out of our input
 * --- controlled component
 * We'll want the input to be controlled by its state
 */

//  import React from "react";

// const CreatePost = ({ user, setPosts }) => {
//   const [content, setContent] = React.useState("");
//   const [image, setImage] = React.useState(null);

//   const imageInputRef = React.useRef()

//   function handleSubmit(e) {
//     e.preventDefault();
//     if(!content && !image) {
//       return alert('Fields must not be empty')
//     }
//     const post = { content, image, user };
//     setPosts(prevPosts => [post, ...prevPosts])
//     setContent('')
//     setImage(null)
//     imageInputRef.current.value = ''
//   }
//   return (
//     <div>
//       <h1>Create New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Post Content"
//           onChange={(e) => setContent(e.target.value)}
//           value={content}
//         />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} />
//         <button type="submit">Submit Post</button>
//       </form>
//       {/* <p>{content}</p>
//       {image && <img src={URL.createObjectURL(image)} alt="upload" style={{height: 100, width: 200, objectFit: 'cover'}} />} */}
//     </div>
//   );
// };

// export default CreatePost;

/**
 * ====================================================================
 *
 */

import React from "react";

import styled from "styled-components";

const INPUT = styled.input`
  border-radius: 5px;
  border: 2px orangered solid;
  padding: 7px 10px;
  text-align: center;
`;
const FORM = styled.form`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
`;

const TITLE = styled.h1`
  text-align: center;
  font-family: sans-serif;
  color: white;

  text-transform: uppercase;
  font-weight: 700;
`;

const BUTTON = styled.button`
  border-radius: 5px;
  border: none;
  padding: 7px 8px;
  text-transform: uppercase;
  letter-spacing: 0.01px;
  font-weight: 600;
`;
const FILEBUTTON = styled.input`
  border-radius: 5px;
  padding: 7px 10px;
  display: inline-block;
  text-transform: uppercase;
  color: white;
  display: flex;
  justify-content: center;
  padding-left: 2.5rem;
  margin-top: 0.5rem;
`;

const CreatePost = ({ user, handleAddPost }) => {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);

  const imageInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content && !image) {
      return alert("Fields must not be empty");
    }
    const post = { content, image, user };
    handleAddPost(post);
    setContent("");
    setImage(null);
    imageInputRef.current.value = "";
  }

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  return (
    <>
      <TITLE>Create New Post</TITLE>
      <FORM onSubmit={handleSubmit}>
        <div style={wrapperStyle}>
          <INPUT
            type="text"
            placeholder="Add Post Content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          {/*
          what is e.target.files
          - e.target.files is an array of files
          
          e.target.files[0] contains the first file in the array as a File object
          - a File object is a file that has been selected by the user
          - we can use this to display the image in our post
          
          explain ref={imageInputRef}
          - we want to be able to access the input element
          - we can do this by using a ref
          - we can then access the input element by using imageInputRef.current
          - we can then set the value of the input element to an empty string
        */}
          <FILEBUTTON
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            ref={imageInputRef}
          />
        </div>
        <BUTTON type="submit">Submit Post</BUTTON>
      </FORM>
    </>
  );
};

export default CreatePost;
