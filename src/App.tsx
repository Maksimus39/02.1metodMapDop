
import logo from './logo.svg';
import './App.css';
import {NevComponent} from "./NevComponent";

function App() {
  const topCars = [
    {manufacturer: 'BMW', model: 'X5'},
    {manufacturer: 'Mercedes', model: 'MLS'},
    {manufacturer: 'Audi', model: 'Q7'}
  ]
  return (
           <NevComponent topCars={topCars}/>
  );
}

export default App;
