import cardPic  from './assets/18083605435026.webp'

function Card() {
    return (
        <div className="card">
            <img className = "card-image" src={cardPic}/>
            <h2 className = "card-title">My Card</h2>
            <p>I'm a developer!</p>
        </div>
    );
}

export default Card