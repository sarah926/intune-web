import picture from '../H copy.png';
import './Home.css'
const signInHandler = Credential => {
    console.log("sign in");
}
function Home() {
    return(
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
    );
}

export default Home;