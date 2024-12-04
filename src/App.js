import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

import About from './components/About';
import Account from './components/Account';
import AccountConfirmed from './components/AccountConfirmed';
import AccountCreation from './components/AccountCreation';
import AccountLogIn from './components/AccountLogIn';
import AccountPasswordChanged from './components/AccountPasswordChanged';
import AccountPassword from './components/AccountPassword';
import AccountSuccesful from'./components/AccountSuccesful';
import Creator from './components/Creator';
import CreatorForm from './components/CreatorForm';
import CreatorFormSubmitted from './components/CreatorFormSubmitted';
import FAQs from './components/FAQs';
import Home from './components/Home';
import Deadshot from './components/Deadshot';
import Juggernog from './components/Juggernog';
import DoubleTapII from './components/DoubleTapII';
import Tombstone from './components/TombstoneSoda';
import ElectricCherry from './components/ElectricCherry';
import ElementalPop from './components/ElementalPop';
import Products from './components/Products';
import TCs from './components/TCs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path = "/" exact={true} Component={Home}/>
          <Route path="/About" Component={About}/>
          <Route path= "/Account"Component={Account}/>
          <Route path ="/Confirmation" Component={AccountConfirmed}/>
          <Route path ="/Creation" Component={AccountCreation}/>
          <Route path = "/LogIn" Component={AccountLogIn}/>
          <Route path="/AccountPassword" Component={AccountPassword}/>
          <Route path = "/Password" Component={AccountPasswordChanged}/>
          <Route path="/Succesful" Component={AccountSuccesful}/>
          <Route path="/Creator" Component={Creator}/>
          <Route path="/Form" Component={CreatorForm}/>
          <Route path ="/Submitted" Component={CreatorFormSubmitted} />
          <Route path="/FAQs" Component={FAQs}/>
          <Route path="/Products" Component={Products}/>
          <Route path="/Deadshot" Component={Deadshot}/>
          <Route path="/DoubleTapII" Component={DoubleTapII}/>
          <Route path="/Juggernog" Component={Juggernog}/>
          <Route path="/Tombstone" Component={Tombstone}/>
          <Route path="/ElectricCherry" Component={ElectricCherry}/>
          <Route path="/ElementalPop" Component={ElementalPop}/>
          <Route path="/T&Cs" Component={TCs} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
