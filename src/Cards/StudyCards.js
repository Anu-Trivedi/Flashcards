import React, {useState} from 'react'

function StudyCards({deck}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCardShown, setIsCardShown] = useState(true);

  const currentCard = deck.cards ? deck.cards[currentIndex] : null;

  const handleFlip = () => setIsCardShown(!isCardShown);

  const handleNext = () => {
    if (currentIndex < deck.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsCardShown(true);
    } else {
      const confirm = window.confirm("Restart cards?\n\nClick 'Cancel' to return to the home page.");
      if (confirm) {
        setCurrentIndex(0);
        setIsCardShown(true);
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <div>
      {currentCard ? (
        <div className="card">
          <div className="card-body">
            <h5>Card {currentIndex + 1} of {deck.cards.length}</h5>
            <p className="card-text">{isCardShown ? currentCard.front : currentCard.back}</p>
            <button type="button" className="btn btn-secondary mr-2" onClick={handleFlip}>Flip</button>
            {isCardShown ? null : <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>}
          </div>
        </div>
      ) : (
        <p>There are no cards in this deck.</p>
      )}
    </div>
  );
}

export default StudyCards