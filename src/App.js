import React from 'react';
import Homescreen from './components/Homescreen'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginScreen from './components/LoginScreen';



function App() {
  const user=null;
  return (
    <div className="App bg-[#111] h-screen">
      <Router>
        {!user?(<LoginScreen/>):(
        
        <Switch>
          <Route path="/" exact component={Homescreen}></Route>
        </Switch>
        )}
      </Router>
    </div>
    
  );
}

export default App;
