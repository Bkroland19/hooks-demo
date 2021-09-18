import React, { useReducer } from "react";

const initialState = 0;

//! the reducer function accepts two arguments that is the currentState and the action and it returns one value which is the new state
const reducer = (state, action) => {
	//!  return newState;
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function useReducerHook() {
	//!useReducer accepts two arguments a reducer func and the initialState
	const [count, dispatch] = useReducer(reducer, initialState);
	//! the dispatch method helps us to execute the code corresponding to a particular action
	return (
		<div>
			<div>Count -{count}</div>
			<button onClick={() => dispatch("increment")}>Increment</button>
			<button onClick={() => dispatch("decrement")}>Decrement</button>
			<button onClick={() => dispatch("reset")}>Reset</button>
		</div>
	);
}

export default useReducerHook;
