import LinkID from './images/LinkID.jpeg';

function AboutUs() {
    return (
        <div className="about-me">
            <div className="container-fluid bg-1 text-center cont">
                <h2 className="margin">About Me</h2>
                <img src={LinkID} className="img-responsive img-circle margin" style={{ display: "inline" }} width="250" height="250" />
                <h1>Gopiben Patel</h1>
            </div>

            <div className="container-fluid bg-2 text-center cont">
                <h3 className="margin">Full Stack Java Developer</h3>
                <p>I am a Full Stack Java Developer who is proficient is problem solving. Let me know if you have any questions</p>

            </div>

            <div className="container-fluid bg-3 text-center cont">
                <h3 className="margin">Where To Find Me?</h3><br />
                <div className="row">
                    <div className="col-sm-4">
                        <a href="https://www.linkedin.com/in/gopi-patel-00995220a/">LinkedIn</a>
                        <img className="img-responsive margin" style={{ width: "81%" }} alt="Image" />
                    </div>
                    <div className="col-sm-4">
                        <a href="https://github.com/GopiPatel0613">GitHub</a>
                        <img className="img-responsive margin" style={{ width: "100%" }} alt="Image" />
                    </div>
                    <div className="col-sm-4">
                        <a href="mailto: gpatel0707@gmail.com">Email: gpatel0707@gmail.com.com</a>
                        <img className="img-responsive margin" style={{ width: "100%" }} alt="Image" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;