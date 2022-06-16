import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>

    <div style={{width: '100%', height: "5px",backgroundColor:"gray",marginTop: "-100px"}}></div>
      <div className={styles.footerHead}>
 
        
      <img style={{width:"200px" ,height:"50px"}} 
        src="https://www.kindpng.com/picc/m/151-1512792_firstpost-hd-png-download.png"/>
        
        <div className={styles.social}>

          <a href="https://www.facebook.com/firstpostin">
            <img
              style={{ marginTop: "10px", width: "30px", height: "30px" }}
              src="https://pnggrid.com/wp-content/uploads/2021/04/facebook-logo-1024x1024.png"
            />
          </a>

          <a href="https://twitter.com/firstpost">
            <img
              style={{ marginTop: "10px", width: "30px", height: "30px" }}
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            />
          </a>

          <a href="https://www.instagram.com/firstpost/">
            <img
              style={{ marginTop: "10px", width: "30px", height: "30px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            />
          </a>

          <a href="https://www.youtube.com/channel/UCz8QaiQxApLq8sLNcszYyJw/featured">
            <img
              style={{
                marginTop: "10px",
                width: "30px",
                height: "30px",
                borderRadius: "50px",
              }}
              src="https://www.dlf.pt/dfpng/middlepng/407-4075505_youtube-red-circle-youtube-icons-png-transparent-png.png"
            />
          </a>
        </div>
      </div>

      <div className={styles.xyz}>

        <div style={{border: "1px solid lightgray",borderLeft:"none"}}>
          <div style={{marginLeft:"20px"}}>
          <h3 style={{fontWeight:"bold"}}>Firtspost</h3>
          <p>About Firstpost</p>
          <p>Press Release</p>
          <p>RSS</p>
          <p>Twitter</p>
          <p>Facebook</p>
          </div>
        </div>

        <div style={{border: "1px solid lightgray"}}>
          <div style={{marginLeft:"20px"}}>
          <h3 style={{fontWeight:"bold"}}>Section</h3>
          <p>Front Page</p>
          <p>Politics</p>
          <p>Sports</p>
          <p>India</p>
          <p>World</p>
          <p>Business</p>
          <p>Entertainment News</p>
          <p>Cricket</p>
          <p>Tech</p>
          <p>Health</p>
          <p>Photos</p>
          <p>Videos</p>
          </div>
        </div>

        <div style={{border: "1px solid lightgray"}}>
          <div style={{marginLeft:"20px"}}>
          <h3 style={{fontWeight:"bold"}}>Plus</h3>
          <p>Cricket Live Score</p>
          <p>New Delhi</p>
          <p>Mumbai</p>
          <p>Fp Exclusives</p>
          <p>Board Exam Results 2020</p>
          <p>Ipl 2020</p>
          </div>
        </div>

        <div style={{border: "1px solid lightgray",borderRight:"none"}}>
            <div style={{marginLeft:"20px"}}>
            <h3 style={{fontWeight:"bold"}}>Tools</h3>
            <p>Rss Feeds</p>
            <h3 style={{fontWeight:"bold"}}>Apps</h3>
            <p>Ios</p>
            <p>Android</p>
            </div>
        </div>
      </div>

      <div style={{margin:"auto",height:"40px",width:"73%",borderBottom:"1px solid lightgray"}}>
      <div style={{display:"flex",fontSize:"15px",fontWeight:"lighter",gap:"30px"}}>
              <div>
                <label>Network18 sites</label>
                <span>-</span>
              </div>
              <div><p>Moneycontrol</p></div>
              <div><p>News18</p></div>
              <div><p>CNBC TV18</p></div>
              <div><p>Overdrive</p></div>
              <div><p>Forbes India</p></div>
              <div><p>TopperLearning</p></div>   
        </div>
      </div>

      <div style={{textAlign:"center",fontWeight:"lighter"}}>
            <p>Copyright © 2022.Firstpost- All Rights Reserved</p>
        </div>

        <div style={{textAlign:"center"}} >
            <p>Terms of use | Privacy | Cookie Policy</p>
        </div>
    </>
  );
}

export default Footer;
