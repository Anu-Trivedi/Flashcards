import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../Layout/Breadcrumb";
import CardForm from "./CardForm";

import { readDeck, readCard, updateCard } from "../utils/api";

function EditCard() {
    const initialFormData = {
        front: "",
        back: ""
    }
    const navigate = useNavigate();
    const { deckId, cardId } = useParams()
    const [deck, setDeck] = useState({})
    const [card, setCard] = useState({})
    const [formData, setFormData] = useState({...initialFormData})

    const handleSubmit = (event) => {
        event.preventDefault()
        updateCard(formData).then(() => navigate(`/decks/${deckId}`));
    }

    const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    useEffect(() => {
        readCard(cardId).then((data) => {
            setCard(data)
            setFormData(data)
        });
    }, [cardId]);

    return (
        <div>
            <Breadcrumb deck={deck} currentPage={`Edit Card ${cardId}`} />
            <h2>Edit Card</h2>
            <CardForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} deckId={deckId} doneText="Cancel" saveText="Submit" />
        </div>
    )
}

export default EditCard;