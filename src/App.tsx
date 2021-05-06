import React from 'react';
import './App.css';
import Counter from './components/counter'
import {connect} from 'react-redux' 
import {update} from './acitons'

function App(props: any) {
  return (
    <div className="App">
      <Counter
      value={props.counter}
      onIncrement={props.update}
      />
    </div>
  );
}



export default connect((state) => ({
  counter:state.counter
}), {
  update
})(App);
