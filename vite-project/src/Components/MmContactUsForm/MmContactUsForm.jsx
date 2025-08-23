import { useEffect, useState } from "react";
import "./MmContactUsForm.css";

const MmContactUsForm = ({ editingItem, onSave }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [yourMessage, setYourMessage] = useState("");
    const [resons, setResons] = useState([]);

    useEffect(() => {
        if (editingItem) {
            setFullName(editingItem.fullName || "");
            setEmail(editingItem.email || "");
            setYourMessage(editingItem.yourMessage || "");
            setResons(editingItem.resons || []);
        }
    }, [editingItem]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setResons([...resons, value]);
        } else {
            setResons(resons.filter((item) => item !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: editingItem ? editingItem.id : Date.now(),
            fullName,
            email,
            resons,
            yourMessage,
        };

        if (onSave) {
            onSave(newItem, !!editingItem);
        } else {
            const stored = localStorage.getItem("contactUsEntries");
            const items = stored ? JSON.parse(stored) : [];
            localStorage.setItem("contactUsEntries", JSON.stringify([...items, newItem]));
        }

        setFullName("");
        setEmail("");
        setYourMessage("");
        setResons([]);
    };

    return (
        <div className="form-contact-us-container">
            <form className="contact-us-form" onSubmit={handleSubmit}>
                <div className="name-and-email-container">
                    <div className="name-email">
                        <label htmlFor="full-name">Full Name</label>
                        <input
                            type="text"
                            id="full-name"
                            value={fullName}
                            placeholder="Type here"
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <div className="name-email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            placeholder="Type here"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="resons-container">
                    <label>Why are you contacting us?</label>

                    <div className="resons">
                        <label>
                            <input className="reson-checkbox"
                                type="checkbox"
                                value="Web Design"
                                checked={resons.includes("Web Design")}
                                onChange={handleCheckboxChange}
                            />
                            Web Design
                        </label>

                        <label>
                            <input className="reson-checkbox"
                                type="checkbox"
                                value="Collaboration"
                                checked={resons.includes("Collaboration")}
                                onChange={handleCheckboxChange}
                            />
                            Collaboration
                        </label>

                        <label>
                            <input
                                type="checkbox" className="reson-checkbox"
                                value="Mobile App Design"
                                checked={resons.includes("Mobile App Design")}
                                onChange={handleCheckboxChange}
                            />
                            Mobile App Design
                        </label>

                        <label>
                            <input className="reson-checkbox"
                                type="checkbox"
                                value="Others"
                                checked={resons.includes("Others")}
                                onChange={handleCheckboxChange}
                            />
                            Others
                        </label>
                    </div>
                </div>

                <div className="user-message">
                    <label htmlFor="your-message">Your Message</label>
                    <textarea
                        id="your-message"
                        value={yourMessage}
                        placeholder="Type here"
                        onChange={(e) => setYourMessage(e.target.value)}
                    ></textarea>
                </div>

                <input className="send" type="submit" value={editingItem ? "Update" : "Submit"} />
            </form>
        </div>
    );
};

export default MmContactUsForm;
