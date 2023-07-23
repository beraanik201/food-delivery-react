// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';
import {useState,useEffect} from 'react';
const Header = () => {

    const[btnName,setBtnName] = useState("Login");

//if no dependency array => useEffect is called on every render.
//if dependency array is empty=> useEffect is called on initial render(just once).
///if dependency array is [btnName]=> useEffect is called everytime btnName is Updated.


    useEffect(()=>{
        //console.log("useEffect called.");
    },[btnName]);

    return (

        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    
                    <li><Link to="/contact">Contact Us</Link></li>
                    {/* <li>Cart</li> */}
                    <button className="login" onClick={() => {
                        btnName===("Login")?setBtnName("Logout"):setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;