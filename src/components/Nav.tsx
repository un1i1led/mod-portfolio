import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

    const goPage = (page: string) => {
        if (page == '/mod-portfolio') {
            navigate(page)
        } else {
            navigate(`/mod-portfolio${page}`);
        }
    }

    return (
        <div className='nav-main'>
            <div className='nav-left'>
                <h1 id='name-h1'>Gilberto.</h1>
            </div>
            <div className='nav-mid'>
                <ul>
                    <li onClick={() => goPage('/mod-portfolio')}>Home</li>
                    <li onClick={() => goPage('/about')}>About</li>
                    <li onClick={() => goPage('/projects')}>Projects</li>
                    <li onClick={() => goPage('/contact')}>Contact</li>
                </ul>
            </div>
            <div className='nav-right'></div>
        </div>
    )
}

export default Nav;