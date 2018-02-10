import React, {Component} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import Image from '../Images/logo_b.png';

class Navbar extends Component {
    render() {
        return(
            <div>
                <div className="Navbar-Parent">
                    <div className="Icon-Parent">
                        <div className="Icon"><img className="logo" src={Image} alt="logo"/></div>
                    </div>

                    <div className="Nav-Parent">
                        <div className="Bar">About</div>
                        <div className="Bar">Work</div>
                        <div className="Bar">Careers</div>
                        <div className="Bar">Blog</div>
                        <div className="Bar2">Contact</div>
                        <div className="Menu">Menu</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar;