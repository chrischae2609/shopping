
import Welcome from "../components/Welcome.jsx";
import Contact from "../components/Contact.jsx";
import Shipping from "../components/Shipping.jsx";
import Policy from "../components/Policy.jsx";

import { Link } from "react-router";

import "../styles/home.css";

const Home = () => {
    return (
        <div className="homeSection">
            <Welcome></Welcome>
            <div className="azamonInfo">
                <Shipping></Shipping>
                <hr></hr>
                <Policy></Policy>
                <hr></hr>
                <Contact></Contact>
                
            </div>
        </div>
    );
};

export default Home;