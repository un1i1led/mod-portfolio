import moonImg from '../assets/moon.svg';
import sunImg from '../assets/sun.svg';

const Nav = () => {
    return (
        <div className='nav-main'>
            <div className='nav-left'>
                <h1 id='name-h1'>Gilberto.</h1>
            </div>
            <div className='nav-mid'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className='nav-right'>
                <img src={sunImg} alt='toggle dark mode' className='small-icon'/>
            </div>
        </div>
    )
}

export default Nav;