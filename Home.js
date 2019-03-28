import React, {Component} from 'react';

import Navbar from '../components/Navbar.js';

import Footer from '../components/Footer.js';


import './Home.css';

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="container">
                  <h2 id="heading1">Welcome the Heidelberg University</h2>
                    <p><h1 id="heading" >Bernhard Eitel Re-Elected Rector of Universität Heidelberg</h1>
                        Press Release No. 27/2019
                        12 March 2019
                        Members of University Council and Senate elect the 59-year-old scientist by a large majority – Third term at the helm of Ruperto Carola
                        Prof. Dr. Dr. h.c. Bernhard Eitel
                        Photo: Philip Benjamin

                        Prof. Dr Bernhard Eitel
                        Prof. Dr Bernhard Eitel is to serve as Rector of Heidelberg University for another six years. The members of the University Council and the Senate re-elected the 59-year-old Heidelberg scientist by a large majority in a joint session this Tuesday (12 March). A majority in both voting bodies is required for appointment by the Minister-President in consultation with the Baden-Württemberg Ministry of Science, Research and the Arts. Prof. Eitel’s third term begins on 1 October 2019.

                        Bernhard Eitel (born 1959) studied geography and German studies at Karlsruhe University (TH). After earning his doctorate and habilitating at the University of Stuttgart, the scientist accepted a professorship at the University of Passau in 1995. In 2001 he was appointed professor of physical geography at Heidelberg University after turning down appointments at the universities of Göttingen and Bayreuth. Prof. Eitel is a member of a number of academic organisations and received an honorary doctorate from the Comenius University in Bratislava (Slovakia) for his research in the field of geomorphology.


                        Editor: Email
                        Latest Revision: 2019-03-12.</p>`
                </div>
              

                <Footer />
            </div>
            
        );
    }
}

export default Home;
