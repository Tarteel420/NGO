import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <section className="section footer  text-white"  style={{ backgroundColor: "#156570" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Info</h6> 
                        <hr/>
                        <p>Welcome to our NGO, a beacon of hope and positive change. Committed to transforming lives through education, child protection, and community empowerment, we strive to create a world where every individual has the opportunity to thrive. Join us in our journey of compassion, collaboration, and impact as we work together to build a better tomorrow for all.</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></div>
                        <div><Link to="/blogs" style={{ textDecoration: 'none', color: 'white' }}>Blogs</Link></div>
                        <div><Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>Projects</Link></div>
                        <div><Link to="/volunteer" style={{ textDecoration: 'none', color: 'white' }}>projects</Link></div>
                        <div><Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</Link></div>
                        <div><Link to="/faq" style={{ textDecoration: 'none', color: 'white' }}>FAQ</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Info</h6>
                        <hr/>
                        <div><p className="text-white mb-1">phase 8 Islamabad</p></div>
                        <div><p className="text-white mb-1">03217089994</p></div>
                        <div><p className="text-white mb-1">98877678</p></div>
                        <div><p className="text-white mb-1">ngo@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;
