import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <Link to={`/details/${item.id}`}>
        <div style={{ width: "42%", height: "650px", margin: "auto" }}>
          <div>
            <img style={{ width: "100%" }} src={item.img} alt="news_image" />
          </div>

          <div
            style={{
              borderBottom: "4px solid #f3a342",
              width: "70px",
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
          <div>{item.desc}</div>
        </div>
      </Link>
    </>
  );
}

export default Home;
