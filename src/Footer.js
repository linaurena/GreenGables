import './styles/Footer.css'
import DocIcon from './img/icons/doc.png'
import GitHubIcon from './img/icons/github.png'
import Love from './img/icons/love.png'

export const Footer = () => {
    return (
        <footer>
            <ul>
                <li><a href='https://github.com/linaurena/GreenGablesAPI'>
                    <img 
                    src={DocIcon} 
                    className='icon' 
                    alt='Doc icon'/>
                </a></li>
                <li><a href='https://github.com/linaurena'>
                    <img 
                    src={GitHubIcon} 
                    className='icon' 
                    alt='Github icon'/>
                </a></li>
                <li><a href='https://github.com/linaurena'>
                    <img 
                    src={Love} 
                    className='icon' 
                    alt='Love icon'/>
                </a></li>
            </ul>
            <p>&lt;&gt; by <a href='https://github.com/linaurena'>Lina Ureña</a> 2021</p>
        </footer>
    )
}
