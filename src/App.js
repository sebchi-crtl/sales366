
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckOutForm from './component/CheckOutForm';
import './App.css';
import { Badge } from 'react-bootstrap'

import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://unpkg.com/carbon-zero-widget";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="App">
      <p>Pay With Carbon Zero</p>
      <CheckOutForm />
      <h6 className='py-3'><Badge bg="secondary">Note</Badge> Make sure your carbon zero account name is corresponding / comparable to your billing Name </h6>
    </div>
  );
}

export default App;
