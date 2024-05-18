import React from "react";
import { Link } from "react-router-dom";

function DeckForm({handleChange, handleSubmit, formData, path}) {
    return (
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Deck Name"
                    onChange={handleChange}
                    value={formData.name}
                    />
                </div>
                <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    placeholder="Brief description of the deck"
                    onChange={handleChange}
                    value={formData.description}
                    />
                </div>
                <Link to={path} type="button" className="btn btn-secondary mr-2" role="button">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    )
}

export default DeckForm