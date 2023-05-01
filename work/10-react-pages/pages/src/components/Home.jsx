import Yuumi_1 from '../images/Yuumi_1.jpg'
import Yuumi_2 from '../images/Yuumi_2.jpg'
import Yuumi_3 from '../images/Yuumi_3.jpg'
import Yuumi_4 from '../images/Yuumi_4.jpg'
import Yuumi_5 from '../images/Yuumi_5.jpg'
import '../css/Home.css'

// One "page" will show a set of cards (content of your choice)
// At least one card should include a link that leads to a different "page"
// The other cards do not need to have links
function Home({onNav}) {
    return (
        <div className='home'>
            
            <div className='card'>
                <h2 className='card_title'>Battle Principal Yuumi</h2>
                <img src={Yuumi_1} alt='Yuumi_1' className='card_pic'/>
                <div class="card_text">Click here link to <a href='/about.html' onClick={onNav} >About</a></div>
            </div>

            <div className='card'>
                <h2 className='card_title'>Bewitching Yuumi</h2>
                <img src={Yuumi_2} alt='Yuumi_2' className='card_pic'/>
                <div class="card_text">Click here link to <a href='/cats.html' onClick={onNav} >Cats</a></div>
            </div>

            <div className='card'>
                <h2 className='card_title'>Heastseeker Yuumi</h2>
                <img src={Yuumi_3} alt='Yuumi_3' className='card_pic'/>
                {/* random context */}
                <div class="card_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Delectus obcaecati quae praesentium maxime explicabo error exercitationem, commodi dolorum reprehenderit vero tempore quo fuga nam expedita, veniam facilis molestias voluptatibus dolor.
                </div>
            </div>

            <div className='card'>
                <h2 className='card_title'>Yuubee</h2>
                <img src={Yuumi_4} alt='Yuumi_4' className='card_pic'/>
                <div class="card_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vero libero.
                    Officiis repellendus eligendi expedita mollitia vel pariatur rerum tempore quibusdam quae sint! Facere voluptatem quas voluptate error, animi expedita?
                </div>
            </div>

            <div className='card'>
                <h2 className='card_title'>EDG Yuumi</h2>
                <img src={Yuumi_5} alt='Yuumi_5' className='card_pic'/>
                <div class="card_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam impedit, ex sunt cumque, eum repudiandae architecto commodi debitis in iste quasi! 
                    Tempora, ut impedit quas voluptas odio rerum repellendus?
                </div>
            </div>
        </div>
    );
}

export default Home;