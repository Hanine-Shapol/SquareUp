// src/Components/HSH_CardCRUD/HSH_CardCRUD.jsx
import { useState } from "react";
import "./HSH_CardCRUD.css";

const defaultCards = [
    {
        id: 1,
        title: "SquareUp has been Instrumental in Transforming our Online Presence.",
        description:
            "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform.",
        image: "/assets/images/John.jpg",
        name: "John Smith",
        job: "CEO of Chic Boutique",
        url: "https://focal-x.com/",
    },
];

const HSH_CardCRUD = () => {
    const stored = localStorage.getItem("sliderCards");
    const [cards, setCards] = useState(
        stored ? JSON.parse(stored) : defaultCards
    );
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        name: "",
        job: "",
        url: "",
        image: null,
    });
    const [editIndex, setEditIndex] = useState(null);

    const saveToLocalStorage = (arr) => {
        localStorage.setItem("sliderCards", JSON.stringify(arr));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () =>
            setFormData((prev) => ({ ...prev, image: reader.result }));
        reader.readAsDataURL(file);
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.description) return;

        const newCard = {
            id: editIndex !== null ? cards[editIndex].id : Date.now(),
            ...formData,
        };

        let updatedCards;
        if (editIndex !== null) {
            updatedCards = cards.map((c, i) => (i === editIndex ? newCard : c));
            setEditIndex(null);
        } else {
            updatedCards = [...cards, newCard];
        }

        setCards(updatedCards);
        saveToLocalStorage(updatedCards);

        setFormData({
            title: "",
            description: "",
            name: "",
            job: "",
            url: "",
            image: null,
        });
    };

    const handleEdit = (i) => {
        setFormData(cards[i]);
        setEditIndex(i);
    };

    const handleDelete = (i) => {
        const updated = cards.filter((_, idx) => idx !== i);
        setCards(updated);
        saveToLocalStorage(updated);
    };

    return (
        <div className="crud-container">
            <h2>Manage Slider Cards</h2>

            <div className="crud-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="job"
                    placeholder="Job"
                    value={formData.job}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="url"
                    placeholder="Website URL"
                    value={formData.url}
                    onChange={handleChange}
                />
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={handleSubmit}>
                    {editIndex !== null ? "Update Card" : "Add Card"}
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
                        <th>Website</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.length > 0 ? (
                        cards.map((card, i) => (

                    <tr key={card.id}>
                        <td>
                            {card.image && (
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "8px",
                                    }}
                                />
                            )}
                        </td>
                        <td>{card.title}</td>
                        <td>{card.description}</td>
                        <td>{card.name}</td>
                        <td>{card.job}</td>
                        <td>{card.url}</td>
                        <td>
                            <button onClick={() => handleEdit(i)}>Edit</button>
                            <button onClick={() => handleDelete(i)}>Delete</button>
                        </td>
                    </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="7" style={{ textAlign: "center" }}>
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