import React from "react";
import { Link } from "react-router-dom";

function CardForm({handleChange, handleSubmit, formData, deckId, doneText, saveText}) {
    return(
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Front</label>
                <textarea
                    className="form-control"
                    id="front"
                    name="front"
                    rows="3"
                    placeholder="Front side of card"
                    onChange={handleChange}
                    value={formData.front}
                    />
                </div>
                <div className="form-group">
                <label htmlFor="description">Back</label>
                <textarea
                    className="form-control"
                    id="back"
                    name="back"
                    rows="3"
                    placeholder="Back side of card"
                    onChange={handleChange}
                    value={formData.back}
                    />
                </div>
                <Link to={`/decks/${deckId}`} type="button" className="btn btn-secondary mr-2" role="button">{doneText}</Link>
                <button type="submit" className="btn btn-primary">{saveText}</button>
            </form>
    )
}

export default CardForm