function Home({ img, category, title, desc }) {
  return (
    <>
    

    <div style={{ width: "42%", height: "650px", margin: "auto" }}>
      <div>
        <img style={{ width: "100%" }} src={img} />
      </div>

      <div
        style={{
          borderBottom: "4px solid #f3a342",
          width: "70px",
          marginBottom: "10px",
        }}
      >
        {category}
      </div>
      <p style={{ font: "Playfair Display",fontSize: "25px",fontWeight: "bold" }}>{title}</p>
      <div>{desc}</div>


      
    </div>
    </>
  );
}




export default Home;
