interface CardDetails {
    image: string;
    name: string;
    description: string;
    live: string;
    git: string;
}

const Card = (props: CardDetails) => {
    return (
        <div className='card'>
            <div className='card-top'>
                <img className='project-img' src={props.image} alt=''/>
            </div>
            <div className='card-mid'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <div className='card-bot'>
                <a href={props.live}>Live</a>
                <a href={props.git}>GitHub</a>
            </div>
        </div>
    )
}

export default Card;