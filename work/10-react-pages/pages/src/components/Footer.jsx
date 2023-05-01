import '../css/Footer.css';

function Footer() {

    return (
        <footer className='footer'>
            
            <ul className='footer_list social'>
                <li> <a href = "/">Blog</a> </li>
                <li> <a href = "/">Contact</a> </li>
                <li> <a href = "/">About</a> </li>
            </ul>

            <ul className='footer_list Cats Story'>
                <li> <a href = "/">Story</a> </li>
                <li> <a href = "/">Secrets</a> </li>
                <li> <a href = "/">Category</a> </li>
            </ul>

            <ul className='footer_list Policy'>
                <li> <a href = "/">Terms</a> </li>
                <li> <a href = "/">Privacy</a> </li>
                <li> <a href = "/">Docs</a> </li>
            </ul>
                
        </footer>
    );
}

export default Footer;