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
import icon4 from '../Images/schedule-icon.svg';
import icon5 from '../Images/content-icon.svg';
import icon6 from '../Images/testing-icon.svg';
import image8 from '../Images/search-bg.jpg';
import image9 from '../Images/team-about-lg.jpg';
import partner from '../Images/premier-google-partner-RGB-search-4-e1469023184599.png';

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
                <div className="separator">
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
                        <div className="cust-designed-parent3">
                            <div className="cd-text-title4">
                                <div className="CD-Text4">CUSTOM CONTENT</div>
                                <div className="cd-title4">Persuade people to schedule a <br/> service</div>
                                <div className="cd-subtitle4">Get content that accurately explains why customers should<br/> 
                                                            choose you over your competitors. Don’t worry, our writers<br/> 
                                                            know your industry like the back of their keyboards.</div></div>
                            <div className="icon4-pos"><img className="icon4" src={icon4} alt="custom-icon4"/></div>
                        </div>
                        <div className="cust-designed-parent">
                            <div className="cd-text-title5">
                                <div className="CD-Text5">CONTENT MARKETING</div>
                                <div className="cd-title5">Get traffic. Build credibility. <br /> Stay top of mind.</div>
                                <div className="cd-subtitle5">We’ll write educational blog posts every month  <br/> 
                                                             to bring in loads of quality traffic and establish  <br/> 
                                                             you as a trustworthy company. Also, we can  <br/> 
                                                             craft professional newsletters that keep you in  <br/>
                                                             front of current customers, so you’re top of <br/> 
                                                             mind year-round.</div>
                                <div className="custom-designed5"><img src={icon5} alt="custom-icon5"/></div> 
                            </div>
                            <div className="cd-text-title6">
                                <div className="CD-Text6">ON-GOING SUPPORT AND TESTING</div>
                                <div className="cd-title6">Evolve your website</div>
                                <div className="cd-subtitle6">We’ll work with you over time to update <br/> 
                                                             and improve your website. You’ll get data-<br/> 
                                                             backed advice from us as we do user <br/> 
                                                             testing, A/B tests and web surveys.</div>
                                <div className="custom-designed6"><img className="icon6" src={icon6} alt="custom-icon6"/></div>    
                            </div>
                        </div>

                        <div className="search-bg">
                            <div><img src={image8} alt="computer-background"/></div>
                        </div>
                        <div className="about-parent">
                            <div className="about-us">About Us</div>
                        </div>
                        <div className="about-parent">
                            <div className="sub-about">We're not just worker bees. We're your expert consultants.</div>
                        </div>
                        <div className="number-parent">
                            <div className="numbers">10<span className="plus">+</span></div><div className="numbers">100<span className="plus">+</span></div><div className="numbers">1000<span className="plus">+</span></div>
                        </div>
                        <div className="number-parent">
                            <div className="num-para">years of HVAC digital <br/> marketing experience</div><div className= "num-para">clients in the HVAC and <br/>plumbing industry</div><div className="num-para">blog articles and pages<br/>written for HVAC websites</div>
                        </div>
                        <div className="know-parent">
                            <div className="know-btn">
                                <div className="ku-btn">Get to know us better</div>
                            </div>
                        </div>
                        <div className="search-bg-pic">
                            <div><img className="group-pic" src={image9} alt="group-pic"/></div>
                        </div>
                    </div>
                </div>

{/* Footer */}

            <div className="green-footer">
                <div className="letschat">Let's chat about <span className="bolding">your project!</span></div>
                <div className="tellus-parent">
                    <div className="tell-btn">
                        <div className="tu-btn">Tell us about it &nbsp;&nbsp;> </div>
                    </div>
                </div>
                <div>
                    <div className="or">or</div>
                </div>    
            </div>
            <div className="wood-parent"> 
                    <div className="ring">Give us a ring at</div>
                    <div className="phone-number">(800) 339-7305</div>
                    <div className="stop-in">You can also stop in! (We have candy and beer.)</div>
                    <div className="address">3335 E. Baseline Rd, Gilbert, AZ 85234 <span className="map">(Map)</span></div>
                    <div><img className="partner" src={partner} alt="partner"/></div>
                    <div className="terms">&#169; 2018 Rocket Media | Terms & Conditions</div>
            </div>


            </div>
        )
    }
}

export default Home;