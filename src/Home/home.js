import React, {Component} from 'react';
import './home.css';
import Image from '../Images/port-main-santafe.png';

class Home extends Component {
    constructor() {
        super()
        this.state= {

        }
    }

    render() {

        return (
            <div>
                <div className="Banner-Background">
                    <div className="Block-Title">
                        <div className="Main-Title">Turn Your HVAC <br />
                                                    Website into Your <br />
                                                    Best Salesperson</div>
                        <div className="Sub-Title">Rocket Media is a customer-focused digital <br/>
                                                   marketing agency. We create custom HVAC <br/>
                                                   websites that attract more search engine <br/>
                                                   traffic and generate high-quality leads.</div>
                        <div className="Contact-btn">
                            <div className="C-btn">Contact us when you're ready</div>
                        </div>
                    </div>
                    <div className="Main-Image"><img src={Image}/></div>
                </div>
            </div>
        )
    }
}

export default Home;