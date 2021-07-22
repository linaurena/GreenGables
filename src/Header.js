import './styles/Header.css';
import TitleImg from './img/name.png';
import BookIcon from './img/book.png';
import QuillIcon from './img/quill.png';

function Header () {
  let movement = window.scrollY
  console.log(movement)
  return (
    <header>
        <div className='cover'>
          <img src={TitleImg} alt='Anne with an E'/>
        </div>
      <nav>
          <ul>
            <li className='link-nav'>
              <a href='./'><img src={BookIcon} alt='Book icon' className='nav-icons'/> Docs</a>
            </li>
            <li className='link-nav'>
              <a href='./'><img src={QuillIcon} alt='Quill icon' className='nav-icons'/>Contact</a>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Header;