import React, { Component } from "react";
import "./style.css";
import myImage from "./mobile.jpg";
class CardView extends Component {
  render() {
    return (
      <div>
        <div className="" style={styles.cardview}>
          <img
            src={myImage}
            alt="description of the image"
            style={styles.image}
          />
          <h2 style={styles.h2}>Social Mobile Phone</h2>
          <p style={styles.p}>
            Through social media, we can share our thoughts, experiences, and
            creativity with a global audience. Photos and videos captured on
            mobile phones find their way to social media platforms, allowing us
            to document our lives and stay updated on the lives of others. It
            has revolutionized the way we interact, fostering virtual
            friendships and communities beyond physical boundaries.
          </p>
          <button style={styles.button}>Use Me</button>
        </div>
      </div>
    );
  }
}

const styles = {
  cardview: {
    height: 390,
    width: 240,
    borderRadius: 5,
    background: "white",
    margin: 10,
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  image: {
    height: 140,
    width: 215,
    backgroundSize: "cover",
  },
  h2: {
    fontSize: 22,
    fontFamily: "OutFit",
    padding: 3,
    marginTop: 5,
    marginLeft:-13,
  },
  p: {
    fontSize: 10,
    marginLeft:12,
    marginRight:12,
    fontFamily:'Montserrat'
  },
  button:{
    height:40,
    width: 215,
    background: 'linear-gradient(90deg, #ff5733, #00bfff)',
    marginTop:10,
    border:'none',
    borderRadius: 5,
    fontFamily:'Outfit'
  }
};

export default CardView;
