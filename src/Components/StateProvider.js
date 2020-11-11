import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => {
    console.log(`reducer = ${reducer}, initialState = ${JSON.stringify(initialState)}, children = ${JSON.stringify(children)}`)
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

// Pull info from the dataLayer
export const useStateValue = () => useContext(StateContext);