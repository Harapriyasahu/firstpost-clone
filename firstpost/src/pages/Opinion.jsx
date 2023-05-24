import React from "react";
import Posts from "./Homedata";

const Opinion = () => {
  const filteredPosts = Posts.filter((item) => item.category === "Opinion");

  return (
    <>
      <div style={{ width: "42%", height: "650px", margin: "auto" }}>
        {filteredPosts.map((item) => (
          <div key={item.id}>
            <div>
              <a href="https://www.firstpost.com/opinion/agnipath-scheme-has-its-reasons-but-government-should-have-initiated-it-as-a-pilot-project-10797931.html">
                <img style={{ width: "100%" }} src={item.img} alt="images" />
              </a>
            </div>

            {/* <div
              style={{
                borderBottom: "4px solid #f3a342",
                width: "70px",
                marginBottom: "10px",
              }}
            >
              {item.category}
            </div> */}
            <p
              style={{
                font: "Playfair Display",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {item.title}
            </p>
            <div>{item.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
};
// const Opinion = () => {
//   return (
//     <>
//       <p
//         style={{
//           marginBottom: "20px",
//           marginTop: "30px",
//           marginLeft: "660px",
//           fontWeight: "600",
//           width: "230px",
//           fontSize: "30px",
//           borderBottom: "5px solid #f3a342",
//         }}
//       >
//         OPINION NEWS
//       </p>
//       <div>
//         {data.india.map((item) => (
//           <Opinionpage key={item.id} {...item} />
//         ))}
//       </div>
//     </>
//   );
// };

export default Opinion;
