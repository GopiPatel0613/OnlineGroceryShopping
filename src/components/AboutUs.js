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
                        <a href="https://www.linkedin.com/in/gopi-patel-00995220a/"> 
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAd7X///8AcLEEebb7/f4Debb9/v79/v8DeLY8l8Y7lsYAbbCcyuKlz+WQxN+Lwd0KfbiDvdvl8fcAc7O+3OwgiL6x1ehFnMlytNZqsNQZhLzF4O7w9/tSo81gqtGp0ebc7PUsjsJ8udngaOvIAAADg0lEQVRoge2abZeqIBCAGV7EjXItKjc1y/7/j7xD7m5AWHdD+uScs3s8kDzOIMwMDoGrSJ4lEC6H0ckVkUEiyeQPBC+ar+pjcqm+GsQMEAntUSuaQJQ+toZC8F+7U4KJBMKE6ltUwkAqJUgiEapCAJGwpSwVgxBGtyAJh4NKCVEH4AStRZNZC+1F0V5orgXN00FyukBzZekh2XsgbzFXCMIGSQlhTCsjegrMCEQQVXfF8rOrFYm3YxjCdFnw6zbdFkJHr6AgROjdGYAbATjXOlaXEISRcgN88GEZh3NJIuclBBF0BfzXr3EoYve1ACTXPViuOAO+izRYAMLUxVLEqBK7RQcggp48yHJ6SG5cjAWRsI/0A0FN9g6Ew2p6TZhae+a6pDDXwn67UKt++rcL3+Gts072sW4gDOn5L4VjRBa7rwT3LkarDMNvmeEf8EV0tDSyC9O++dZku4uPyEb8CdO6KrbNtvjQOt5rjXnGnGGkrKmibALfP+7jBQ6fs0lCvnHIn4Tlj2KBsTkJX4cGYgLH1yiD8n+A/LcgACevrHe7ujRXQYXCEFHaIsLNZjgMnMrjstm0nLebZnXodSi6Cbvfz3Zzk3Y97I/ozOxmE2Dkql5vnCS0OQbe+WAgoZbOjcUPpLBbeU0I7dprZi4xlZYyM8ENNP3d6h2DcPkj/Ab5vDVjkllrgg/DpfNA+HN59D3DKMTahW3ILbxoa3Ru/D75x59Uni6vQ3hZOL7N8j9+ePMqRMLmACNnGHce6FUItrcgA4ThCdwU9HUIjDLuVImAjB/4+EFnjCZXba6xv/SU8oLOOEhmvQgu5GRPShQER25Pl667nFrXeBmc7ZUSA8FxLyU1mSWtTw7Fm5S4ia/Ud5KsnVtM34dlrwiIxNkV31ZhhG1sXTh01sy/DkG7W55SqC9npcLXJBBvHEzPLFU4rCeBgBeHs7MDKaaA4A5ZWggvdXKzs5chGTSOn2XKTZlX02jiJnnGOU8O8ZO8u146CWTpQdYzZIbMkBkyQ2bIDJkhA+QmDsRqDkCs3tXTqH4FtiyDxx6BkMiW/ZO4K6eH/eom+27oy2nnNB+8DPfo9j5JgswBk/PVnj1sfnzTKMScPVpf7fMnzU97JzqDfCxvhMxfsf8Ake8pX3hLIUbqkhJtSkpSF8ccTXGMKSXqk5f5vKVg6Xpkkbz06j1FZJC6HO4fbRVnSvd35FUAAAAASUVORK5CYII="className="img-responsive margin" style={{ width: "50%" }} alt="Linkedin" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://github.com/GopiPatel0613">
                        <img src="https://i.ibb.co/L8v2FhM/maxresdefault.jpg" className="img-responsive margin" style={{ width: "100%" }} alt="Image" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="mailto: gpatel0707@gmail.com">
                        <img src=" https://i.ibb.co/4tKZ9vB/Gmail-logo.jpg" className="img-responsive margin" style={{ width: "100%" }} alt="Image" />
                       </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;