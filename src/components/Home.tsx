import pic from '../assets/pic.jpg';
import linkedin from '../assets/icons8-linkedin.svg';
import githubWhite from '../assets/github-mark-white.svg';

const Home = () => {
    return (
        <div className='home-main'>
            <div className='home-top'>
                <img src={pic} alt=''/>
                <h2 className='blue-txt'>Hello, I'm</h2>
                <h1>Gilberto Sanchez</h1>
                <div className='center'>
                    <p>I'm a full-stack web developer from Mexico. I primarily use React.js, Node.js and Typescript to create dynamic websites</p>
                </div>
                <button className='blue-btn'>More About Me</button>
            </div>
            <div className='home-bot'>
                <div className='home-bot-imgs'>
                    <img src={githubWhite} alt='github link'/>
                    <img src={linkedin} alt='linkedin link'/>
                </div>
                <p>© 2023 • Gilberto Sanchez. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Home;