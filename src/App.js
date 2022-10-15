
import './App.css';
import { useState } from 'react';





function App() {
  
  var andhraPlaces=[{name:"Vishakapatnam",description:"Vizag is the most well known beach place in state", rating:"5"},{name:"Kakinada",description:"Kakinada is a well known place for temples",rating:"4"},{name:"Palakollu", description:"Palakollu is my native place. I love to be here.", rating:"4"}]
  var telanganaPlaces=[{name:"Hyderabad",description:"Hyderabed is the metropolitan city. It is the  IT HUB of Telangana",rating:"4.5"},{name:"Warrangal",description:"Warrangalhas many historica places. It is our history of Kings",rating:"4"},{name:"Secundrabaed",description:"Secundrabed is the twin city. It is the  IT TWIN of Telangana",rating:"4.5"}]
  var tamilnaduPlaces=[{name:"Arunachalam",description:"Arunachalam is the best place i feel beacause its lord shiva place",rating:"4"},{name:"Rameswaram",description:"Rameswaram is the best place i feel beacause its lord shiva pace",rating:"4"},{name:"Madurai",description:"Madhurai is the place of nature",rating:"4"}]

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
        <h3>{place.description}</h3>
        <h3>{place.rating}/5</h3>
        </li>
      })}
     
     </ul>
     </div>


    </div>
  );
}

export default App;
