import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <p id="heading">Abouts Us</p>
                <div className="container">
                    <div className="content">
                        <ul>
                            <li>Our mission is to provide free video courses</li>
                            <li>Any one can join us....</li>
                            <li>We will also provise projects</li>
                            <li>Students of Computer Science can contact us for Projects  </li>
                            <li>We can handle any kind of projects</li>
                            <li>Free training of Ms Office.</li>
                            <li>And much more.</li>
                            <li>For more information Visit this site....</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;