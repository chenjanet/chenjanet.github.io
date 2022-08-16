import React from 'react';
import pic from '../images/pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../App.css';

const About = () => {
    return (
        <div className='folder' id='aboutFolder'>
            {/*<div className='mobileTab'>about</div>*/}
            <div className='content selected' id='aboutContent'>
                <img id='portrait' src={pic} style={{}}></img>
                <div id='aboutText'>
                    <h3 id='heading'>Hi! I'm Janet Chen.</h3>
                    <p>
                        I'm a second-year software engineering student at the University of Waterloo. I just finished my 2B term, and during Fall 2022, I'll be interning at Zynga in their application platform engineering team!</p>
                    <p>
                        In the past, I've developed a core microservice for BitGo, a bank teller UI at NCR, and data visualization dashboards for Counting Opinions.
                    </p>
                    <p>    
                        In my free time, I enjoy reading, playing the piano, and tinkering with my mechanical keyboard. Feel free to send me book recommendations - I'm always looking to add to my ever-growing to-be-read list!
                    </p>
                    <p>
                        Let's connect! Click on the icons below for my email, GitHub, and LinkedIn.
                    </p>
                    <div id='icons'>
                        <a href='mailto:janet.chen@uwaterloo.ca' title='Email'>
                            <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </a>
                        <a href='https://github.com/j985chen' title='GitHub'>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a href='https://linkedin.com/in/j985chen/' title='LinkedIn'>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
