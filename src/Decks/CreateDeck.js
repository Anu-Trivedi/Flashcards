import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeckForm from './DeckForm';
import Breadcrumb from '../Layout/Breadcrumb';
import { createDeck } from '../utils/api'

function CreateDeck() {
  const initialFormData = {
    name: "",
    description: ""
  }
  const navigate = useNavigate();
  const [formData, setFormData] = useState({...initialFormData})

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createDeck(formData).then(({ id }) => navigate(`/decks/${id}`));
  }

  return (
    <div>
      <Breadcrumb currentPage="Create Deck"/>
      <h1>Create Deck</h1>
      <DeckForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} path={"/"}/>
    </div>
  )
}

export default CreateDeck
