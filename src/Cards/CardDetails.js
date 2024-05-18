import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteCard } from "../utils/api"

import { BsPencilFill, BsTrash } from "react-icons/bs";

function CardDetails({card}) {
    const { deckId } = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {
        const confirm = window.confirm("Delete this card?")
        if (confirm) {
            deleteCard(card.id).then(() => navigate(0));
        }
    }

    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{card.front}</h5>
                <p className="card-text">{card.back}</p>
                <div className="d-flex justify-content-end">
                    <Link to={`/decks/${deckId}/cards/${card.id}/edit`} type="button" className="btn btn-secondary m-1"><BsPencilFill /> Edit</Link>
                    <button onClick={handleDelete} type="button" className="btn btn-danger m-1"><BsTrash /></button>
                </div>

            </div>
        </div>
    )
}

export default CardDetails