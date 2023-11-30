import React, { useState } from 'react';
import FlashCard from './FlashCard';
import NavUser from '../nav-user/NavUser';
import InfoNav from '../info-nav/InfoNav';

const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 8) + 2; // 2 through 9
    const num2 = Math.floor(Math.random() * 9) + 1; // 1 through 9
    const correctAnswer = num1 * num2;
    const wrongAnswer = correctAnswer + (Math.random() > 0.5 ? 1 : -1); // similar but incorrect answer

    return {
        question: `${num1} x ${num2} = ?`,
        options: [
            { value: correctAnswer, isCorrect: true },
            { value: wrongAnswer, isCorrect: false }
        ].sort(() => Math.random() - 0.5) // shuffle options
    };
};

export default function FlashCards() {
    const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());
    const [correctCount, setCorrectCount] = useState(0);
    const [stars, setStars] = useState(0);
    const [diamonds, setDiamonds] = useState(0);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            const newCorrectCount = correctCount + 1;
            setCorrectCount(newCorrectCount);
            if (newCorrectCount % 10 === 0) {
                const newStars = stars + 1;
                setStars(newStars);
                if (newStars % 3 === 0) {
                    setDiamonds(diamonds + 1);
                }
            }
            setCurrentQuestion(generateQuestion()); // Next question
        } else {
            setCorrectCount(0); // Reset correct count on wrong answer
            alert(`Wrong answer! Try again.`);
        }
    };

    return (
        <>
        <NavUser/>
        <InfoNav/>
        <div className="container mt-4">
            <FlashCard 
                question={currentQuestion.question} 
                options={currentQuestion.options} 
                onAnswer={handleAnswer} 
            />
            <div className="mt-3">
                <p>Correct Answers: {correctCount}</p>
                <p>Stars: {'★'.repeat(stars)}</p>
                <p>Diamonds: {'♦'.repeat(diamonds)}</p>
            </div>
        </div>
        </>
    );
}
