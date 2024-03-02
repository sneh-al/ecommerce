import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Navbar from "../../Navbar";

const Root = () => {

  return (
    <Fragment>
      <Navbar />
        <Outlet />
    </Fragment>
  );
};

export default Root;
