import React from 'react';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu'
import {connect} from 'react-redux' 
import {update} from './acitons'

function App(props: any) {
  return (
    <div className="App">
      <div>
      <SideMenu />
      </div>
    </div>
  );
}



export default connect((state) => ({
  counter:state.counter
}), {
  update
})(App);
