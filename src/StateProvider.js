import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();    //PREPARING THE DATALAYER

export const StateProvider = ({reducer, initialState, children})=> (    //WRAPPING THE APP INSIDE THE DATALAYER
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);