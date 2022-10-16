import React from "react";
import profilepic from "../images/profile-logo.jpg";
import "../css/Myprojects.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import OYOLOGO from "../images/oyo-logo.png";

const Myprojects = () => {
  const ALL_CARD = [
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
    {
      logo: OYOLOGO,
      logoname: "OYO",
      btn: "Submit Work",
      title: "Diwali Campaign",
      description:
        "This is a campaign to create a stunning videos from the boutique...",
      price: "₹2500",
    },
  ];

  return (
    <div className="container-main">
      <div className="profile">
        <h3>Mayilsamy</h3>
        <img src={profilepic} alt="profilepic" />
      </div>
      <div className="myprojects">
        <h3>
          My Projects<span>(13)</span>
        </h3>
        <h3 className="explore">Explore</h3>
        {/* <input type="text" placeholder="Search Project"/> */}
        <TextField
          className="search"
          id="input-with-icon-textfield"
          placeholder="Search Projects"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </div>
      <hr />
      <div className="all-items">
        {ALL_CARD.map((data) => (
          <div className="card">
            <img src={data.logo} alt="" />
            <span>
              <h5>{data.logoname}</h5>
            </span>
            <button>{data.btn}</button>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <h5 className="price">{data.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myprojects;
