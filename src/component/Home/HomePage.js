import videoHomePage from "../../assect/video.mp4"
const HomePage = (props) => {
    return(
        <div className="homepage-container">
            <video autoPlay muted loop className="video">
                <source src={videoHomePage} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="homepage-content">
                <div className="title-1">The hospital water tower is derelict and its future is uncertain</div>
                <div className="title-2">Finding yourself in need of medical treatment with 
                international care level while living in Ho Chi Minh City can be a time consuming experience.
                </div>
                <div className="title-3">
                    <button> the most stringent safety standard in the world.</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage