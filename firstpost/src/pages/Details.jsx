import React from "react";
import { Posts } from "../config/PostData";

import { useParams } from "react-router";

const Details = () => {
  const postId = useParams();
  const item = Posts.find((item) => item.id === JSON.parse(postId?.id));

  // if (!item) {
  //   return <div>Details not found</div>;
  // }

  console.log({ item });

  return (
    <div
      style={{
        height: "200px",
        // backgroundColor: "red",
        marginBottom: "500px",
      }}
    >
      <div style={{ width: "42%", height: "650px", margin: "auto" }}>
        <img src={item.img} alt="" />
        <div
          style={{
            borderBottom: "4px solid #f3a342",
            marginBottom: "10px",
          }}
        >
          {item.category}
        </div>
        <p
          style={{
            font: "Playfair Display",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default Details;
