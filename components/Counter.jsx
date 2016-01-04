import {element} from 'deku';
import {increment, decrement} from '../actions/counter';

export default {
  render({context, dispatch}) {
    return (
      <div>
        <div>
          Counter: <span>{`${context.counter}`}</span>
        </div>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    );
  }
};
