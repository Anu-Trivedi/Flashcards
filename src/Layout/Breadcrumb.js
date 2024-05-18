import React from "react"
import { Link } from "react-router-dom";

import { BsHouseFill } from "react-icons/bs";

function Breadcrumb({ deck = null, currentPage}) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/"><BsHouseFill /> Home</Link></li>
            {deck ?  <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li> : null}
            <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb