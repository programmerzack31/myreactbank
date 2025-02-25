// import logo from './logo.svg';
import { MyBankcontext } from './components/Mycontext';
import { useContext} from 'react';
import './App.css';
import Deposite from './components/Deposite';
import Widthrawl from './components/Widthrawl';



 const App = ()=> {
  const Ibalance = useContext(MyBankcontext);

 

  return (
    <div className="App">
      <h1>Welcome To Apna Bank</h1>
      <h2>Your Current Balance Is ${Ibalance.balance}</h2>
      <Deposite />
      <Widthrawl />
    </div>
  );
}

export default App;