import pic from '../assets/pic.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='home-main'>
            <div className='home-top'>
                <img src={pic} alt=''/>
                <h2 className='blue-txt'>Hello, I'm</h2>
                <h1>Gilberto Sanchez</h1>
                <div className='center'>
                    <p>I'm a full-stack web developer from Mexico. I primarily use React.js, Node.js and Typescript to create dynamic websites</p>
                </div>
                <button className='blue-btn' onClick={() => { navigate('/mod-portfolio/about')}}>More About Me</button>
            </div>
        </div>
    )
}

export default Home;