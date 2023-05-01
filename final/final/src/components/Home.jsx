import webCover from '../static/images/logo192.png'
import AlgoCover from '../static/images/algorithm.jpg'
import InterviewCover from '../static/images/interview.jpg'
import '../static/css/Home.css'
import Accordion from './Accordion'

const items = [
    {
        header: 'Email',
        body: 'ding.yi3@northeastern.edu',
    },
    {
        header: 'My Info',
        body: 'A graduate student majored in Information system in Northeastern University',
    }
];

function Home({ changePage, darkModeClass }) {
    return (
        <div className={`home ${darkModeClass}`}>
            <div className='blog-card-left fade-in' onClick={(e) => { changePage('/Webdesign.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-left' src={webCover} alt="React Cover" aria-label='The cover of this blog' />
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Web Design/User Experience
                    </div>
                    <div className='blog-info'>
                        <h4>Html | CSS | React </h4>
                    </div>
                    <div className='blog-content'>
                        React Learning Notes
                    </div>
                </div>
            </div>
            <div className='blog-card-right fade-in' onClick={(e) => { changePage('/Algorithm.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-right' src={AlgoCover} alt="Algorithm Cover" aria-label='The cover of this blog' />
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Program Structure And Algorithms
                    </div>
                    <div className='blog-info'>
                        <h4>Algorithms</h4>
                    </div>
                    <div className='blog-content'>
                        Fundamental programming constructs and their performance
                    </div>
                </div>
            </div>
            <div className='blog-card-left fade-in' onClick={(e) => { changePage('/Interview.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-left' src={InterviewCover} alt="Java Cover" aria-label='The cover of this blog'/>
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Interview tips
                    </div>
                    <div className='blog-info'>
                        <h4>Three-C’s method | questions | Summary | Thank-you notes </h4>
                    </div>
                    <div className='blog-content'>
                        How to prepare for the interview
                    </div>
                </div>
            </div>
            <div className="blog-divider"></div>
            <div className='blog-accordion'>
                <Accordion darkModeClass={darkModeClass} items={items}></Accordion>
            </div>
        </div>
    );
}

export default Home;