import React, { createContext, useState } from 'react';
import axios from '../../screens/axios-states';

export const StatisticContext = createContext();

const StatisticStore = ({children}) => {

    const [state, setState]=useState({})
    const [states, setStates]=useState({})

    const saveState = async (token, newState) => {
        setState({ ...state, saving: true });
        try {
            const response = await axios.post(`states.json?auth=${token}`, newState);
            setState({ ...state, saving: false, finished: true, error: null });
            return response; // Resolves the promise with the response
        } catch (error) {
            setState({ ...state, saving: false, finished: true, error });
            return Promise.reject(error); // Rejects the promise with the error
        }
    };
    
    const loadStates = (userId, token) => {       
        setStates({ ...states, loading: true });
    
        axios
          .get(`states.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
          .then((response) => {
            const loadedStates = Object.entries(response.data).reverse();
            setStates({ ...states, states: loadedStates });
          })
          .catch((err) => setStates({ ...states, error: err }));
      };

    return (
        <StatisticContext.Provider value={{saveState, loadStates}}>
            {children}
        </StatisticContext.Provider>
    )
}

export default StatisticStore;
