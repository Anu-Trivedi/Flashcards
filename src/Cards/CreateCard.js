import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Breadcrumb from "../Layout/Breadcrumb";
import CardForm from "./CardForm";

import { readDeck, createCard } from "../utils/api"

function CreateCard(){
    const initialFormData = {
        front: "",
        back: ""
    }
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
        createCard(deckId, formData)
        setFormData(initialFormData)
    }
    
    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    return (
        <div>
            <Breadcrumb deck={deck} currentPage="Add Card" />
            <h2>{deck.name}: Add Card</h2>
            <CardForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} deckId={deckId} doneText="Done" saveText="Save" />
        </div>
    )
}

export default CreateCard