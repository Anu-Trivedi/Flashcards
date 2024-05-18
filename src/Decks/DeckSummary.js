import React from "react";
import {Link, useNavigate} from "react-router-dom";

import { deleteDeck } from "../utils/api";

import { BsEyeFill, BsFillBookmarksFill, BsTrash } from "react-icons/bs";

function DeckSummary({ deck: {name, cards, description, id} }) {
    const navigate = useNavigate();

    const handleDelete = () => {
        const confirm = window.confirm("Delete this deck?")
        if (confirm) {
            deleteDeck(id).then(() => navigate(0));
        }
    }

  return (
      <div className="card mb-2">
          <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6>{cards.length} cards</h6>
              <p className="card-text">{description}</p>
              <div className="d-flex">
                  <Link to={`/decks/${id}`} type="button" className="btn btn-secondary m-1"><BsEyeFill /> View</Link>
                  <Link to={`/decks/${id}/study`} type="button" className="btn btn-primary m-1"><BsFillBookmarksFill /> Study</Link>
                  <button onClick={handleDelete} type="button" className="btn btn-danger m-1 ml-auto"><BsTrash /></button>
              </div>
          </div>
      </div>
  );
}

export default DeckSummary;
