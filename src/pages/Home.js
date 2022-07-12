import picture from '../H copy.png';
import './Home.css'
import {Navbar} from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom';

const signInHandler = Credential => {
    console.log("sign in");
}
function Home() {
    return(
        <div>
        <Navbar>
            <Link to={"/CreateAccount"}>
                <h1>Home</h1>
            </Link>
        </Navbar>
        <div className="row">
            <div className="column">
                <text className="title">
                    in tune
                </text>
            </div>
            <div className="column2">
                    <text
                        className="tagLine">
                        Where the music happens.
                    </text>
                    <text className="usernameLabel">Username:</text> 
                    <input type="text" id="username" name="username" className="usernameField"></input>
                    <text className="passwordLabel">Password:</text> 
                    <input type="text" id="password" name="password" className="passwordField"></input>
                    <button onEvent="" id="signin" className="signButton">Sign in</button>
                    <text className="noAccount">
                        Don't have an account? Click here to create.
                    </text>
                    
                    <img className="image" src={picture} alt="music"/>
                
            </div>
        </div>
        </div>
    );
}

export default Home;