const About = () => {
    return (
        <div className='about-main'>
            <div className='about'>
                <div className='header-div'>
                    <h1>About Me</h1>
                </div>
                <div className='me'>
                    <p>Hi, I'm Gilberto Sanchez</p>
                    <p>I'm a full-stack web developer from Mexico and I'm currently studying to receive a bachelor's in software engineering. I've always been really interested in computers and around the fifth grade I became really interested in web development. I first started by creating websites for videogames I liked on website builders where you'd drag and drop elements. Later on in life when deciding what I wanted to study in uni I realized that I could choose software engineering as a career.</p>
                    <p>After studying for awhile in uni I became so interested in the work that I started looking for all kinds of things to learn outside of uni and thats when I found <a href='https://theodinproject.com'>The Odin Project</a> where I've learned stuff like React and Node.js</p>
                    <p>Besides all that, I'm also really into films, books and playing guitar.</p>
                </div>
                <div className='skills'>
                    <h2>Technical Knowledge</h2>
                    <h3>Front-End</h3>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>React.js</li>
                    </ul>
                    <h3>Back-End</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                    <h3>Other</h3>
                    <ul>
                        <li>Linux CLI</li>
                        <li>Git</li>
                        <li>Figma</li>
                        <li>Fly.io</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;