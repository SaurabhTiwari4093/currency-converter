import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import CurrencyConverter from './components/currencyconverter';
import { useState} from 'react';

function App(){
  const [user,setUser]=useState(null);

  return (
    <div className='container-fluid'>
    <Router>
       <Routes>
        <Route path="/" element={<SignIn setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/currencyconverter" element={<CurrencyConverter user={user}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
