import './App.css';
import picture from './music-clipart.png';

function App() {
  return (
    <div> 
      <div className="row">
        <div className="column">
      <text
            style={{
              fontSize: 400,
              color: 'white',
            }}>
            In Tune
          </text>
      </div>
        <div className="column2">
          <text
            style={{
              fontSize: 20,
              color: 'black',
              
            }} className="text3">
              Where the music happens.
            </text>
          <input type="text" id="username" name="username" className="text1"></input>
          <input type="text" id="password" name="password" className="text2"></input>
          <button className="button1">sign in</button>
          <button className="button2">create account</button>
          <img className="image" src={picture} alt="music"/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
