import React, {Component} from 'react';
import './home.css';
import Image from '../Images/port-main-santafe.png';
import Image2 from '../Images/gb-logo.png';
import Image3 from '../Images/mj-logo.png';
import Image4 from '../Images/logo.png';
import Image5 from '../Images/port-gb.png';
import Image6 from '../Images/port-mojenk.png';
import Image7 from '../Images/port-coolray.png';
import icon1 from '../Images/designed-icon.svg';
import icon2 from '../Images/responsive-icon.svg';
import icon3 from '../Images/seo-icon.svg';

class Home extends Component {
    constructor() {
        super()
        this.state= {

        }
    }

    render() {

        return (
            <div>

{/* Main Banner */}

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
                    <div className="Main-Image"><img src={Image} alt="main"/></div>
                </div>

{/* Case Studies Banner */}

                <div className="CompaniesBanner">
                    <div className="Companies-Parent">
                        <div className="title-div">
                            <div className="companies-title">Top HVAC companies hire us</div>
                            <div className="companies-paragraph">For over 10 years, we've worked with 100+ HVAC and other home service <br />
                                                            companies. See our best work.</div>
                        </div>
                        <div className="images-parent">
                            <div><img className="image2" src={Image2} alt="George-Brazil"/></div>
                            <div><img className="image3" src={Image3} alt="Morris-Jenkins"/></div>
                            <div><img className="image4" src={Image4} alt="Coolray"/></div>
                        </div>
                        <div className="images-parent2">
                            <div><img className="image5" src={Image5} alt="George-Brazil"/></div>
                            <div className="placement"><img className="image6" src={Image6} alt="Morris-Jenkins"/></div>
                            <div><img className="image7" src={Image7} alt="Coolray"/></div>
                        </div>
                        <div className="parent-casestudy">
                            <div className="cs1">See case study <span> > </span></div>
                            <div className="cs2">See case study <span> > </span></div>
                            <div className="cs3">See case study <span> > </span></div>
                        </div>
                        <div className="allcsParent">
                            <div className="allcs">See all case studies</div>
                        </div>
                    </div>
                </div>

{/* End-Banner */}

                <div className="hvacSellBanner">
                    <div className="hvacSell-Parent">
                        <div className="title-div">
                            <div className="hvacTitle">How we create HVAC websites that sell</div>
                        </div>
                        <div className="cust-designed-parent">
                            <div className="icon1"><img src={icon1} alt="custom-icon1"/></div>
                            <div className="cd-text-title">
                                <div className="CD-Text">CUSTOM DESIGNED</div>
                                <div className="cd-title">Made specifically to meet your goals</div>
                                <div className="cd-subtitle">Stand out from your competition with a website that’s tailored to your <br/> 
                                     brand, your services and your business goals.</div></div>
                        </div>
                        <div className="cust-designed-parent">
                            <div className="cd-text-title2">
                                <div className="CD-Text2">RESPONSIVE</div>
                                <div className="cd-title2">Well-dressed and works <br /> well on all devices</div>
                                <div className="cd-subtitle2">Customers will contact you with ease on their <br/> 
                                                             smartphones since your beautiful website can <br/> 
                                                             adjust to any device. Also, your website will rank <br/> 
                                                             higher since Google rewards mobile-friendly <br/>
                                                             websites.</div>
                                <div className="custom-designed2"><img src={icon2} alt="custom-icon2"/></div> 
                            </div>
                            <div className="cd-text-title3">
                                <div className="CD-Text3">SEO</div>
                                <div className="cd-title3">Rank high on search <br/> engines with keywords <br/> that matter</div>
                                <div className="cd-subtitle3">Customers will contact you with ease on their <br/> 
                                                             smartphones since your beautiful website can <br/> 
                                                             adjust to any device. Also, your website will rank <br/> 
                                                             higher since Google rewards mobile-friendly <br/>
                                                             websites.</div>
                                <div className="custom-designed3"><img src={icon3} alt="custom-icon3"/></div>    
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;