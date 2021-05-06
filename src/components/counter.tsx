/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import './index.scss'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }: {value: number, onIncrement?: () => any, onDecrement?: () => any, onIncrementAsync?: () => any}) =>
      <div className='red'>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

export default Counter