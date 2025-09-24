import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PostCard from "../component/PostCard";

function Home() {
    const navigate = useNavigate();
    
    const goToProfile = () => {
        navigate("/profile");
    }
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>Midnight MVP Version</h1>
        <button onClick={goToProfile}>profile</button>
      </div>
     <PostCard />
    </>
  );
}

export default Home;
