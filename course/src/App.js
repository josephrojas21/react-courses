import React from 'react';
import './App.css';
import ConditionalSection from './sections/conditional'
import cars from './data/cars.json'
import List from './sections/lists'


class App extends React.Component {
  

  render() {
    return (
      <div className="app">
        {/* <ConditionalSection/> */}
        <List/>
        <ul>
          {
            cars.map(car => {
              return (
                <li key={car.id}>
                  <p><strong>Nombre: </strong>{car.name}</p>
                  <p><strong>Marca: </strong>{car.company}</p>

                </li>
              )
            })
          }
        </ul>
        <p>{cars.length}</p>
      </div>
    )
  }
}

export default App;
