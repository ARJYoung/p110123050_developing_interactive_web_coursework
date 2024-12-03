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
import Product1 from './components/Product1';
import Product2 from './components/Product1';
import Product3 from './components/Product3';
import Product4 from './components/Product4';
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
          <Route path="/Product1" Component={Product1}/>
          <Route path="/Product2" Component={Product2}/>
          <Route path="/Product3" Component={Product3}/>
          <Route path="/Product4" Component={Product4} />
          <Route path="/Products" Component={Products}/>
          <Route path="/T&Cs" Component={TCs} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
