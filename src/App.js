import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Content from './component/content';
import Footer from './component/footer';
import Sidebar from './component/sidebar';
import EditProfile from './component/edit-profile';
import Icons from './component/icons';
import TablesList from './component/tables-list';
import Tipography from './component/tipography';
import Notifications from './component/notifications';

function App() {
  return (
    <>
     <Router>
   
     <Switch>
          <Route exact path="/TablesList" component={TablesList} />  
          <Route exact path="/EditProfile" component={EditProfile} />
          <Route exact path="/Icons" component={Icons} />
          <Route exact path="/Tipography" component={Tipography} />
          <Route exact path="/Notifications" component={Notifications} />
      </Switch>

      </Router>
    
        <div>
        <Content />
        <Sidebar />
        <Footer /> 
    
        </div>    
    </>
  );
}

export default App;
