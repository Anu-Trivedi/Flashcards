import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DeckForm from "./DeckForm";
import Breadcrumb from "../Layout/Breadcrumb";

import { readDeck, updateDeck } from "../utils/api/index"

function EditDeck() {
    const initialFormData = {
        name: "",
        description: ""
    }
    const navigate = useNavigate();
    const { deckId } = useParams()
    const [deck, setDeck] = useState({})
    const [formData, setFormData] = useState({...initialFormData})

    const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateDeck(formData).then(({ id }) => navigate(`/decks/${id}`));
  }

    useEffect(() => {
        readDeck(deckId).then((data) => {
            setDeck(data)
            setFormData(data)
        });
    }, [deckId]);

    return (
        <div>
            <Breadcrumb deck={deck} currentPage="Edit Deck"/>
            <h1>Edit Deck</h1>
            <DeckForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} path={`/decks/${deckId}`}/>
        </div>
    )
}

export default EditDeck;