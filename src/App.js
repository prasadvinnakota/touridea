import logo from './logo.svg';
import './App.css';
import { useState } from 'react';





function App() {
  
  var andhraPlaces=[{name:"Vishakapatnam",rating:"5"},{name:"Kakinada",rating:"4"}]
  var telanganaPlaces=[{name:"Hyderabad",rating:"4.5"},{name:"Warrangal",rating:"4"}]
  var tamilnaduPlaces=[{name:"Arunachalam", rating:"4"},{name:"Rameswaram",rating:"4"}]

  var [places, setPlaces] = useState([])

  function placesInStatesHandler(states)
  {
    console.log(states)
    setPlaces(states)
  }


  return (
    <div className="App">
    <h1> 🚀 Tour Places</h1>
     <p>Check my favourite places. Select a state for trip</p>
     <div>
     <button onClick={()=>placesInStatesHandler(andhraPlaces)}>Andhra Pradesh</button>
     <button onClick={()=>placesInStatesHandler(telanganaPlaces)}>Telangana</button>
     <button onClick={()=>placesInStatesHandler(tamilnaduPlaces)}>Temilnadu</button>

    
     </div>
     <hr/>

     <div>
     <ul>
     {places.map(function(place)
      {
        return <li className="list__item">
        <h2>{place.name}</h2>
        <h3>{place.rating}/5</h3>
        </li>
      })}
     
     </ul>
     </div>


    </div>
  );
}

export default App;
