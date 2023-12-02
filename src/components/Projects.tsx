import Card from './Card';
import projectList from '../assets/info.js' 

const Projects = () => {

    const createCards = () => {
        const cards = [];

        for (const project of projectList) {
            cards.push(<Card image={project.image} name={project.name} description={project.description} live={project.live} git={project.git}/>)
        }

        return cards;
    }

    return (
        <div className='project-main'>
            <div className='project'>
                <div className='header-div'>
                    <h1>Projects</h1>
                </div>
                <div className='cards'>
                    {createCards()}
                </div>
            </div>
        </div>
    )
}

export default Projects;