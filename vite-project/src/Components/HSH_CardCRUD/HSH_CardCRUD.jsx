
import React, { useState, useEffect } from "react";
import "./HSH_CardCRUD.css";

const HSH_CardCRUD = ({ cards, setCards }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);

    // Load cards from localStorage on mount
    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem("sliderCards")) || [];
        if (storedCards.length > 0) {
            setCards(storedCards);
        }
    }, [setCards]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    const saveToLocalStorage = (cardsArray) => {
        localStorage.setItem("sliderCards", JSON.stringify(cardsArray));
    };

    const handleSubmit = () => {
        if (!title || !description) return;

        const newCard = {
            id: editingIndex !== null ? cards[editingIndex].id : Date.now(),
            title,
            description,
            name,
            job,
            url,
            image,
        };

        let updatedCards;
        if (editingIndex !== null) {
            updatedCards = cards.map((card, i) => (i === editingIndex ? newCard : card));
            setEditingIndex(null);
        } else {
            updatedCards = [...cards, newCard];
        }

        setCards(updatedCards);
        saveToLocalStorage(updatedCards);

        setTitle("");
        setDescription("");
        setName("");
        setJob("");
        setUrl("");
        setImage(null);
    };

    const handleEdit = (index) => {
        const card = cards[index];
        setTitle(card.title);
        setDescription(card.description);
        setName(card.name);
        setJob(card.job);
        setUrl(card.url);
        setImage(card.image);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedCards = cards.filter((_, i) => i !== index);
        setCards(updatedCards);
        saveToLocalStorage(updatedCards);
    };

    return (
        <div className="crud-container">
            <h2>Manage Slider Cards</h2>
            <div className="crud-form">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
                <input type="text" placeholder="Website URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={handleSubmit}>
                    {editingIndex !== null ? "Update Card" : "Add Card"}
                </button>
            </div>
            <table className="crud-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Website URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.length > 0 ? (
                        cards.map((card, index) => (
                            <tr key={card.id}>
                                <td>
                                    {card.image && (
                                        <img
                                            src={card.image}
                                            alt={card.name}
                                            style={{ width: "50px", height: "50px", borderRadius: "8px" }}
                                        />
                                    )}
                                </td>
                                <td>{card.title}</td>
                                <td>{card.description}</td>
                                <td>{card.name}</td>
                                <td>{card.job}</td>
                                <td>{card.url}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                                No cards found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HSH_CardCRUD;