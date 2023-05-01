import '../static/css/About.css'
import '../static/css/css-gg.css'
import Carousel from "./Carousel_about";
function About({darkModeClass}) {
    return (
        <div className="about">
            
            <div className={`about-img-container ${darkModeClass}`}>
                <div className={`about-img-card ${darkModeClass}`}>
                    <Carousel></Carousel>
                </div>
            </div>
            <div className="about-intro-container">
                <div className={`about-intro-header-card ${darkModeClass}`}>
                    <div className="about-intro-header-text" aria-label='The title of about page'>About Me</div>
                </div>
                <div className={`about-intro-main-card ${darkModeClass}`} aria-label='The intro of about page' >
                    <p className={`about-intro-main-text ${darkModeClass}`}>
                    I am Yi Ding, a graduate student majored in Information system in Northeastern University!!
                        <br />
                        I enjoyed the challenges that my education presented, and I'm very excited to work as a professional software developer and use the versatile skills this career demands.
                        </p>
                </div>

                <div className={`about-intro-header-card ${darkModeClass}`}>
                    <div className="about-intro-header-text" aria-label='The title of about page'>Education</div>
                </div>

                <div className={`about-intro-main-card ${darkModeClass}`} aria-label='The intro of about page' >
                    <p className={`about-intro-main-text ${darkModeClass}`}>
                        Bachlor of Art in Applied Math, <a href="https://www.ucdavis.edu/">University of California--Davis</a> , Davis, CA, 2017 - 2021
                        <br />
                        <br />
                        Master of Science in Information System, <a href="https://www.northeastern.edu/">Northeastern University Website</a>, San Jose, CA, 2022 - 2024
                        <br />
                        
                    </p>
                </div>

                <div className={`about-intro-tag-card ${darkModeClass}`} aria-label='The intro tags of about page'>
                    <div className="about-intro-tag-label"> My github link : </div> 
                    
                    <div className={`about-intro-icon-card ${darkModeClass}`} aria-label='The github repository of author'>
                    <a href="https://github.com/AlinaYI" ><i className="gg-smile-mouth-open"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;