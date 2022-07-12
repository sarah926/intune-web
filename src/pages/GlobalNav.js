import './Home.css'
import {Navbar} from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom';

const signInHandler = Credential => {
    console.log("sign in");
}
function GlobalNav() {
    return(
        <Navbar>
            <Link to={"/CreateAccount"}>
                <h1>Home</h1>
            </Link>
        </Navbar>
    );
}

export default GlobalNav;