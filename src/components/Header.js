import React from "react";
import Logo from "../images/logo.jpg";
import "../css/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedIcon from "@mui/icons-material/Speed";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContactsIcon from "@mui/icons-material/Contacts";
import SettingsIcon from "@mui/icons-material/Settings";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const Header = () => {
  const MENU_DATA = [
    { menuIcon: <SpeedIcon />, menuTitle: "Dashboard" },
    { menuIcon: <ShoppingBagIcon />, menuTitle: "Projects" },
    { menuIcon: <ContactsIcon />, menuTitle: "Earnings" },
    { menuIcon: <SettingsIcon />, menuTitle: "Profile" },
  ];

  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            <h3>Logo</h3>
          </span>
        </div>
        <div className="hidemenu">
          <span>{<MenuIcon />}</span>
          <span>
            <p>Hide Menu</p>
          </span>
        </div>
        <div className="headeritem">
          {MENU_DATA.map((menu) => (
            <div className="dashboard">
              <span>{menu.menuIcon}</span>
              <span>
                <p>{menu.menuTitle}</p>
              </span>
            </div>
          ))}
        </div>

        <div className="support">
          <p>Support</p>
        </div>
        <div className="ticket">
          <span>{<ConfirmationNumberIcon />}</span>
          <p>Tickets</p>
          <p className="ticket-count">5</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
