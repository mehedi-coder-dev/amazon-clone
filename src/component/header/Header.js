import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";
import Authentication from "../../Authentication";

const Header = () => {
  const [{ basket }] = useStateValue();
  const { user, signout } = Authentication();

  const signouthandle = () => {
    signout();
  };

  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <Search className="header_searchIcon" />
      </div>

      <div className="header_nav">
        {user ? (
          <div className="header_option">
            <span className="header_optionLineOne">{user.displayName}</span>
            <button className="optionLineTwo" onClick={signouthandle}>
              signOut{" "}
            </button>
          </div>
        ) : (
          <Link to="/login" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Hello</span>
              <span className="header_optionLineTwo">Sign In</span>
            </div>
          </Link>
        )}

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
