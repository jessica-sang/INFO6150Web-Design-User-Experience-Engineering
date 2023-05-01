import '../static/css/Album.css'
import Carousel from "./Carousel_album";
import LandScape1 from '../static/images/landscape1.jpg'
import LandScape2 from '../static/images/landscape2.jpg'
import LandScape3 from '../static/images/landscape3.jpg'
import LandScape4 from '../static/images/landscape4.jpg'
import LandScape5 from '../static/images/landscape5.jpg'
import LandScape6 from '../static/images/landscape6.jpg'
import LandScape7 from '../static/images/landscape7.jpg'
import LandScape8 from '../static/images/landscape8.jpg'

function Album({ darkModeClass }) {
    return (
        <div className={`album ${darkModeClass}`}>
            <div className='album-title' aria-label='Album title'>
                View
            </div>
            <Carousel></Carousel>
            <div className='album-container'>
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape1} />
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape8} />
            </div>
            <div className='album-container'>
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape3} />
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape4} />
            </div>
            <div className='album-container'>
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape5} />
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape2} />
            </div>
            <div className='album-container'>
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape7} />
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape6} />
            </div>

            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Album;
