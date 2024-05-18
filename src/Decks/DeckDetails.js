import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import CardDetails from "../Cards/CardDetails"
import Breadcrumb from '../Layout/Breadcrumb';

import { readDeck, deleteDeck } from '../utils/api';

import { BsPencilFill, BsFillBookmarksFill, BsPlusSquare, BsTrash } from "react-icons/bs";

function DeckDetails() {
    const { deckId } = useParams()
    const navigate = useNavigate();
    const [deck, setDeck] = useState({})

    const handleDelete = () => {
        const confirm = window.confirm("Delete this deck?")
        if (confirm) {
            deleteDeck(deckId).then(() => navigate("/"));
        }
    }

    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    return (
        <div>
            <Breadcrumb currentPage={deck.name}/>
            <div className="pb-2">
                <div className="mb-2">
                    <h2>{deck.name}</h2>
                    <p>{deck.description}</p>
                    <div className="d-flex">
                        <Link to={`/decks/${deckId}/edit`} type="button" className="btn btn-secondary m-1"><BsPencilFill /> Edit</Link>
                        <Link to={`/decks/${deckId}/study`} type="button" className="btn btn-primary m-1"><BsFillBookmarksFill /> Study</Link>
                        <Link to={`/decks/${deckId}/cards/new`} type="button" className="btn btn-primary m-1"><BsPlusSquare /> Add Cards</Link>
                        <button onClick={handleDelete} type="button" className="btn btn-danger m-1 ml-auto"><BsTrash /></button>
                    </div>
                </div>
                <h2>Cards</h2>
                {deck?.cards?.map(card => {
                    return <CardDetails key={card.id} card={card} />
                })}
            </div>
        </div>
    )
}

export default DeckDetails