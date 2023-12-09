import React, { createContext, useState } from 'react';
import axios from '../../screens/axios-states';

export const StatisticContext = createContext();

const StatisticStore = ({children}) => {
    const [state, setState]=useState({})
    const [states, setStates]=useState({})

    const saveState = async (newState) => {
        setState({ ...state, saving: true });
        try {
            const response = await axios.post(`states.json`, newState);
            setState({ ...state, saving: false, finished: true, error: null });
            return response;
        } catch (error) {
            setState({ ...state, saving: false, finished: true, error });
            return Promise.reject(error);
        }
    };
    
    const loadStates = async (userId) => {
        setStates({ ...states, loading: true });
        try {
            const response = await axios.get(`states.json`);
            const allStates = response.data;
            const userStates = [];
    
            // Filter states based on userId
            for (let key in allStates) {
                if (allStates[key].userId === userId) {
                    userStates.push(allStates[key]);
                }
            }
    
            setStates({ ...states, states: userStates, loading: false });
            return userStates;
        } catch (error) {
            setStates({ ...states, error: error, loading: false });
            console.error("Error loading states:", error);
            return Promise.reject(error);
        }
    };
    
    return (
        <StatisticContext.Provider value={{saveState, loadStates}}>
            {children}
        </StatisticContext.Provider>
    )
}

export default StatisticStore;
