import React, { useContext, useEffect, useState } from 'react';
import { StatisticContext } from '../../contexts/statistic-context/StatisticContext';

export default function InfoAlert({ level, rate, time, localDate, localTime, saveTrigger }) {
    const { saveState } = useContext(StatisticContext);
    const [message, setMessage]=useState("");

    useEffect(() => {
        if (saveTrigger) {
            const newState = { level, rate, time, date: localDate, localTime };
            const token = localStorage.getItem("userToken"); // Example token retrieval
            if (token) {
                saveState(token, newState)
                    .then(() => setMessage("Record saved successfully!"))
                    .catch((error) => setMessage(`Error saving record: ${error.message}`));
            }
        }
    }, [saveTrigger, level, rate, time, localDate, localTime, saveState]);
    

    return (
        <div>
            {saveTrigger && message}
        </div>
    );
}
