import React, { createContext, useState } from "react";
import axios from "../../screens/axios-states";

export const StatisticContext = createContext();

const StatisticStore = ({ children }) => {
  const [state, setState] = useState({});
  const [states, setStates] = useState({});

  const saveState = async (newState, token) => {
    setState({ ...state, saving: true });
    try {
      const response = await axios.post(`states.json?auth=${token}`, newState);
      setState({ ...state, saving: false, finished: true, error: null });
      return response;
    } catch (error) {
      setState({ ...state, saving: false, finished: true, error });
      return Promise.reject(error);
    }
  };
  const loadStates = async (userId, token) => {
    setStates({ ...states, loading: true });
    const queryUrl = `states.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`;

    try {
      const response = await axios.get(queryUrl);
      const fetchedStates = response.data;
      const statesArray = fetchedStates
        ? Object.keys(fetchedStates)
            .reverse()
            .map((key) => ({
              ...fetchedStates[key],
              id: key,
            }))
        : [];
      setStates({ ...states, states: statesArray, loading: false });
      return statesArray;
    } catch (error) {
      setStates({ ...states, error: error, loading: false });
      console.error("Error loading states:", error);
      return Promise.reject(error);
    }
  };

  return (
    <StatisticContext.Provider value={{ saveState, loadStates }}>
      {children}
    </StatisticContext.Provider>
  );
};

export default StatisticStore;
