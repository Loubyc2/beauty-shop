import React, { useContext, createContext, useReducer } from 'react';

const StateContext = createContext()

function StateProvider({ children, initialState, reducer }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)} >
            { children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)
export default StateProvider;