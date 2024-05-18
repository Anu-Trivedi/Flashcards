import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import StudyCards from '../Cards/StudyCards';
import Breadcrumb from '../Layout/Breadcrumb';

import { readDeck } from '../utils/api';

import { BsPlusSquare } from "react-icons/bs";

function StudyPage() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [notEnoughCards, setNotEnoughCards] = useState(false);

  useEffect(() => {
    readDeck(deckId).then((data) => {
      if (data.cards.length < 3) {
        setNotEnoughCards(true);
      }
      setDeck(data);
    });
  }, [deckId]);

  return (
    <div>
      <Breadcrumb deck={deck} currentPage="Study" />
      <h2>{deck.name}: Study</h2>
        {notEnoughCards ? (
          <div>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards to study. There are {deck?.cards?.length} cards in this deck.</p>
            <Link to={`/decks/${deckId}/cards/new`}>
              <button type="button" className="btn btn-primary"><BsPlusSquare /> Add Cards</button>
            </Link>
          </div>
        ) : (
          <div>
            <StudyCards deck={deck} />
          </div>
        )}
    </div>
  );
}


export default StudyPage