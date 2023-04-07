import React from "react";
import CreatePost from "@/components/CreatePost";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import styles from "./Main.module.css";

const Main = ({ user, setUser, handleAddPost, posts }) => {
  return (
    <div className={styles.main}>
      <Header user={user} setUser={setUser} />
      <div className={styles.wrapper}>
        <CreatePost user={user} handleAddPost={handleAddPost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Main;
