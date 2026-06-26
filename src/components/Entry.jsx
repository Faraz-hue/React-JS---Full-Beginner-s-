
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-img-container"><img className="main-img"
                src={props.img.src} alt={props.img.alt} srcset="" />
            </div>
            <div className="main-content">
                <img src={props.googleMapsLinks} width="30px" alt="" srcset="" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLinks}>
                    View on google</a>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>

        </article>
    )
}