import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import DeckSummary from "./DeckSummary";

import { listDecks } from "../utils/api/index";

import { BsPlusSquare } from "react-icons/bs";

function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then((data) => setDecks(data));
  }, []);
  
  return (
    <div>
      <Link to="/decks/new" type="button" className="btn btn-secondary mb-3"><BsPlusSquare /> Create Deck</Link>
        {decks.map((deck) => {
          return <DeckSummary key={deck.id} deck={deck} />;
        })}
    </div>
  )
}

export default DeckList;
