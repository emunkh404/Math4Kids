import React,{useState,useEffect} from 'react';
import { Badge } from 'react-bootstrap';
import './Warning.css'; // Import your animations stylesheet

export default function Warning({ score }) {
  const [showBadge, setShowBadge] = useState(false);

  const encouragementWords = [
    "Good", "Cool", "Excellent", "Good Job", "Go Go", 
    "Wow", "You Are Genius", "You Did It"
  ];

  const getEncouragementWord = () => {
    const index = Math.floor(score / 5) % encouragementWords.length;
    return encouragementWords[index];
  };

  useEffect(() => {
    if (score % 5 === 0 && score !== 0) {
      setShowBadge(true);
      setTimeout(() => setShowBadge(false), 1000); // Hide after 1 second
    }
  }, [score]);

  const wordToShow = getEncouragementWord();

  return (
    <div className="container">
      {showBadge && (
        <Badge pill bg="info" className="popUpBadge popUpAndOut">
          {wordToShow}
        </Badge>
      )}
    </div>
  );
}
