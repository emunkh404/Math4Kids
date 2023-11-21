import React from 'react';

const FlashCard = ({ question, options, onAnswer }) => {
    return (
        <div className="card text-center">
            <div className="card-header">
                Multiplication Quiz
            </div>
            <div className="card-body">
                <h5 className="card-title">{question}</h5>
                <div>
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className="btn btn-primary m-2"
                            onClick={() => onAnswer(option.isCorrect)}>
                            {option.value}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlashCard;
