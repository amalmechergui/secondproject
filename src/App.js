
import './App.css';
import { Card } from 'react-bootstrap';
import Navigation from './Navigation';
import Description from './Components/Description';
import Image from './Components/Image';
import Name from './Components/Name';
import Price from './Components/Price';
import Product from './Product';

function App() {
  const firstName = "Amal";
  return (
    <div className="App">

      <Navigation />
      <Card>
        <Card.Body>
        <Name />
        <Price />
      <Description />
       {firstName && <Image />} 
      </Card.Body>
      </Card>
      
      <p>Bonjour, {firstName ? firstName : 'là'} !</p>
    </div>
  );
};


export default App;
