import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useEffect } from "react";
import {Divider} from "@nextui-org/react";


// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css'

const Root = () => {
  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <div className="min-h-screen flex flex-col " >
      <Navbar />
      <main className="overflow-hidden">
      <Outlet />
      </main>
        <Divider className="mt-auto" />
        <Footer/>
    </div>
  )
};

export default Root;
