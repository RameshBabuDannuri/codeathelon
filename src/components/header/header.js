import React from "react";
import "./header.css";
import distsys from "../../resources/images/distsys.png";
const Header = props => {
  return (
    <div className="conatiner">
      <div className="row">
        <div
          className="col-md-6"
          style={{ textAlign: "left", paddingTop: "10em" }}
        >
          <h2>{props.header}</h2>
          <p className="">{props.paragraph}</p>
          <button className="btn btn-primary ">
            <a href="#" alt="buy" />
            Sign Up
          </button>
          <br />
        </div>
        <div className="column column_md-6 column_lg-7 hero_image mv-3">
          <a href="https://form.jotform.me/90471997889482">
            <img
              className="bg-dark responsive rounded "
              src={distsys}
              data-was-processed="true"
              style={{ width: "550px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
