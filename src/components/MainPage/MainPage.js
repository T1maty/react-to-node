import video from "../Video/video1.mp4"
import "../css/main.css"
const MainPage = () => {
    return (
        <body>
        <div className="banner">
            <video autoPlay loop muted plays-inline>
                <source src={video}/>
            </video>
            <div className="navbar">
                <a href="#" className="logo">Girris</a>
                <ul>
                    <li><a href="/Travel">Travel</a></li>
                    <li><a href="#">New's</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="/Registration">Log In</a></li>

                </ul>
            </div>
            <div className="content">
                <h1>THIS IS A SERVICE TRAVEL</h1>
                <div>
                    <button type="button">GET STARTED</button>
                </div>
            </div>
        </div>
        </body>
    )
}

export default MainPage;