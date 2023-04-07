// import React from "react";

// const PostList = ({ posts }) => {
//   return posts.map((post, index) => (
//     <React.Fragment key={index}>
//       {post.image && (
//         <img
//           src={URL.createObjectURL(post.image)}
//           alt="post-cover"
//           style={{ height: 100, width: 200, objectFit: "cover" }}
//         />
//       )}
//       <p>{post.content}</p>
//       <div>{post.user}</div>
//     </React.Fragment>
//   ));
// };

// export default PostList;

/**
 * =================================================================================
 */

 import React from "react";

 import Post from "./Post";

const PostList = ({ posts }) => {
  return posts.map((post, index) => (
    // <Post post={post} key={index} />
    <Post key={index} {...post} />
  ));
};

export default PostList;

/**
 * =================================================================================
 */


/**
 * =================================================================================
 */


