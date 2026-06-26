
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'

export default function Contact(props) {
    console.log(props)
    return (
        <div className="contacts">
            <article className="contact-card">
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={viteLogo} alt="" />
                    <p>{props.phoneNumber}</p>
                </div>
                <div className="info-group">
                    <img src={heroImg} width="35px" alt="" />
                    <p>{props.email}</p>
                </div>
            </article>
        </div>
    );
}

