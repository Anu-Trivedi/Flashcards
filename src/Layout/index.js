import React from "react";
import {Routes, Route} from 'react-router-dom';

import Header from "./Header";
import NotFound from "./NotFound";
import CreateCard from "../Cards/CreateCard";
import EditCard from "../Cards/EditCard";
import CreateDeck from "../Decks/CreateDeck";
import EditDeck from "../Decks/EditDeck";
import DeckList from "../Decks/DeckList";
import DeckDetails from "../Decks/DeckDetails";
import StudyPage from "../Decks/StudyPage";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Routes>
          <Route path="/" element={<DeckList />} />
          <Route path="/decks/:deckId/study" element={<StudyPage />} />
          <Route path="/decks/new" element={<CreateDeck />} />
          <Route path="/decks/:deckId" element={<DeckDetails />} />
          <Route path="/decks/:deckId/edit" element={<EditDeck />} />
          <Route path="/decks/:deckId/cards/new" element={<CreateCard />} />
          <Route
            path="/decks/:deckId/cards/:cardId/edit"
            element={<EditCard />}
          />
          <Route path="/some/bad/route" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
