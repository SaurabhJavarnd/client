import React from "react";

const DefaultLayout = (props) => {
  return (
    <div>
      <div className="">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">
              <h1>trellingauto</h1>
            </a>
          </div>
        </nav>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
