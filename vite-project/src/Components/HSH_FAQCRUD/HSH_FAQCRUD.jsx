
import React, { useState, useEffect } from "react";
import "./HSH_FAQCRUD.css";

const defaultFAQ = [
    {
        question: "What services does SquareUp provide",
        answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
        question: "How can SquareUp help my business?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "What industries does SquareUp work with?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "How long does it take to complete a project with SquareUp?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "Do you offer ongoing support and maintenance after the project is completed?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "Can you work with existing design or development frameworks?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "How involved will I be in the project development process?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "Can you help with website or app maintenance and updates?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    }
];

function HSH_FAQCRUD() {
    const storedFAQ = JSON.parse(localStorage.getItem("faqData")) || defaultFAQ;
    const [faqData, setFaqData] = useState(storedFAQ);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem("faqData", JSON.stringify(faqData));
    }, [faqData]);

    const handleAddOrUpdate = () => {
        if (!question || !answer) 
            return;

        if (editIndex !== null) {
            const updated = [...faqData];
            updated[editIndex] = { question, answer };
            setFaqData(updated);
            setEditIndex(null);
        } else {
            setFaqData([...faqData, { question, answer }]);
        }

        setQuestion("");
        setAnswer("");
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setQuestion(faqData[index].question);
        setAnswer(faqData[index].answer);
    };
const handleDelete = (index) => {
        const updated = faqData.filter((_, i) => i !== index);
        setFaqData(updated);
    };
return (
        <div className="faq-crud-container">
            <h2>FAQ Management</h2>
            <div className="faq-form">
                <input
                    type="text"
                    placeholder="Enter question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <textarea
                    placeholder="Enter answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button onClick={handleAddOrUpdate}>
                    {editIndex !== null ? "Update" : "Add"}
                </button>
            </div>
            <table className="faq-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {faqData.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.question}</td>
                            <td>{item.answer}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HSH_FAQCRUD;