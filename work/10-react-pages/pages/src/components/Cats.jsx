import '../css/Cats.css'
import Yummi_1 from '../images/Yuumi_1.jpg'
import Yummi_2 from '../images/Yuumi_2.jpg'

function Cats() {
    return (
        <div className="Cats">
            <div class="card_right">
                <img class="card_pic_right" src={Yummi_1} alt="Yuumi_1" />
                <h2 class="card_title">Battle Principle Yuumi</h2>
                <div class="card_text">
                    <p>Modi voluptas tempora distinctio expedita, atque suscipit nisi quam aliquid tempore sapiente cupiditate odio molestias deserunt harum placeat repudiandae quis eius cumque quidem quos!</p>
                    <p>Natus laudantium dolores illum eius, hic sint aut architecto quasi vel possimus itaque culpa numquam earum reiciendis minus accusamus fugiat! </p>
                    <p>Neque cupiditate illo voluptas animi nesciunt consequuntur deserunt maiores vitae minus, recusandae quo saepe ratione.</p>
                    <p>Molestiae non quaerat esse? Cum eum hic aspernatur facilis nemo distinctio praesentium iure dolor qui expedita delectus!</p></div>
            </div>

            <div class="card_left">
                <img class="card_pic_left" src={Yummi_2} alt="Yuumi_2" />
                <div class="card_area">
                    <h2 class="card_title">Bewitching Yuumi</h2>
                    <div class="card_text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio quaerat vel! Repellat officiis assumenda eligendi sunt provident iste deserunt omnis!</p>
                        <p>Facere aliquid atque ipsam! Autem fugit consectetur distinctio repellat ratione quisquam error alias libero. Quidem est iste quam sapiente mollitia doloremque blanditiis sunt facilis enim ut ipsa, fugit labore id voluptatibus? </p>
                        <p>Tempora perferendis ad culpa. Quis nulla praesentium dolorem a deserunt ducimus tempore alias deleniti animi fugit labore, eum nobis minus minima unde neque expedita ipsa non dolor officiis, distinctio eius. Laborum, odio provident. Hic non sint voluptate nostrum consequuntur, in, inventore vero ipsa ea voluptates illo. Odio impedit magnam aliquam doloremque quidem. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cats;