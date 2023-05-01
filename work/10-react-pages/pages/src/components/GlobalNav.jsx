import '../css/GlobalNav.css';
import '../css/css-gg.css'
import { useState } from 'react';
import menu from './menu';


function GlobalNav({ className, onNav }) {
    const [showMenu, setShowMenu] = useState(false);
    const list = menu.map(item => {
      return (
        <li className="global_nav_item" key={item.name}>
          <a 
          className="global_nav_link" 
          href={item.path}
          onClick= { onNav }
          >
            {item.name}
          </a>
        </li>
      );
    });
  
    const showClass = showMenu ? 'global_nav_list--open' : '';
  
    return (
      <nav className={`global_nav ${className}`}>
        <button className='global_nav_button'
          onClick={() => {
            setShowMenu(!showMenu)
          }}
          aria-label={showMenu ? "Close Menu" : "Open Menu"}
          ><i className='gg-menu' /></button>
          <ul className={`global_nav_list ${showClass}`}>
            {list}
          </ul>
      </nav>
    );
  }
  
  export default GlobalNav;