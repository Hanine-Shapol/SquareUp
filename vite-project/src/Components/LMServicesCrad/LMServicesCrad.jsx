import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LMServicesCrad.css";

const STORAGE_KEY = "lm_cards";

const LMServicesCrad = () => {
    const [rows, setRows] = useState([]);
    const [form, setForm] = useState({
        id: null,
        image: "",
        title: "",
        paragraph: "",
        btn: "learn more",
    });

    const formRef = useRef(null);
    const navigate = useNavigate();

    // قراءة فقط (بدون زرع افتراضيات)
    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
        try {
            setRows(JSON.parse(raw));
        } catch {
            setRows([]);
        }
        }
    }, []);

    const persist = (next) => {
        setRows(next);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!form.title.trim() || !form.paragraph.trim()) return;

        if (form.id) {
        // تعديل
        const updated = rows.map((r) => (r.id === form.id ? form : r));
        persist(updated);
        } else {
        // إضافة
        const newRow = { ...form, id: Date.now(), btn: form.btn || "learn more" };
        persist([...rows, newRow]);
        }
        // Reset
        setForm({ id: null, image: "", title: "", paragraph: "", btn: "learn more" });

        // بعد العملية ننتقل للهوم
        navigate("/");
    };

    const onEdit = (row) => {
        setForm(row);
        setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
        formRef.current?.querySelector("input")?.focus();
        }, 100);
    };

    const onDelete = (id) => {
        const filtered = rows.filter((r) => r.id !== id);
        persist(filtered);
        setForm((f) =>
        f.id === id
            ? { id: null, image: "", title: "", paragraph: "", btn: "learn more" }
            : f
        );
        // بعد الحذف نرجع للهوم
        navigate("/");
    };

    const onCancel = () => {
        setForm({ id: null, image: "", title: "", paragraph: "", btn: "learn more" });
    };

    return (
        <div>
        {/* الفورم */}
        <form ref={formRef} className="lm-form" onSubmit={onSubmit}>
            <label>
            Image File
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                    setForm((f) => ({ ...f, image: reader.result }));
                    };
                    reader.readAsDataURL(file);
                }
                }}
            />
            </label>

            <label>
            Title
            <input
                type="text"
                name="title"
                value={form.title}
                onChange={onChange}
                placeholder="Title"
                required
            />
            </label>

            <label>
            Paragraph
            <textarea
                name="paragraph"
                value={form.paragraph}
                onChange={onChange}
                placeholder="Paragraph"
                required
            />
            </label>

            <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit">{form.id ? "Update" : "Add"}</button>
            {form.id && (
                <button type="button" onClick={onCancel}>
                Cancel
                </button>
            )}
            </div>
        </form>

        {/* الجدول */}
        <div className="lm-table-wrap">
            <table className="lm-table">
            <thead>
                <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Paragraph</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((r) => (
                <tr key={r.id}>
                    <td>
                    {r.image ? (
                        <img src={r.image} alt={r.title} />
                    ) : (
                        <span style={{ opacity: 0.6 }}>—</span>
                    )}
                    </td>
                    <td>{r.title}</td>
                    <td>{r.paragraph}</td>
                    <td className="lm-actions">
                    <button type="button" onClick={() => onEdit(r)}>
                        Edit
                    </button>
                    <button type="button" onClick={() => onDelete(r.id)}>
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
                {rows.length === 0 && (
                <tr>
                    <td colSpan="4" style={{ opacity: 0.7 }}>
                    No items found.
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default LMServicesCrad;
