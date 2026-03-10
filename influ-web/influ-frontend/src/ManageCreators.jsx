import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageCreators() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const [creators, setCreators] = useState([]);
  const [link, setLink] = useState("");
  const [reach, setReach] = useState("");
  const [suff, setSuff] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const [adding, setAdding] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (!token) {
      nav("/login");
      return;
    }
    fetchCreators();
  }, []);

  async function fetchCreators() {
    try {
      const res = await fetch(
        "https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/getcreator"
      );
      const data = await res.json();

      if (data.status === "success") {
        setCreators(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleAdd() {
    if (!link || !reach || !file) {
      alert("Please fill all required fields");
      return;
    }

    setAdding(true);

    const formData = new FormData();
    formData.append("link", link);
    formData.append("reach", reach);
    formData.append("suff", suff);
    formData.append("file", file);
    formData.append("name", name);

    try {
      const res = await fetch(
        "https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/addcreator",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setLink("");
        setReach("");
        setSuff("");
        setName("")
        setFile(null);
        fetchCreators();
      } else {
        alert("Error adding creator");
      }
    } catch (err) {
      console.error(err);
    }

    setAdding(false);
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this creator?")) return;

    setDeletingId(id);

    try {
      const res = await fetch(
        `https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/deletecreator?id=${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        fetchCreators();
      } else {
        alert("Delete failed");
      }
    } catch (err) {
      console.error(err);
    }

    setDeletingId(null);
  }

  return (
    <div className="creator-page">
      <h1>Manage Creators</h1>

      {/* Add Creator */}
      <div className="creator-form">
        <input
          className="creator-input"
          type="text"
          placeholder="Creator Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={adding}
        />
        <input
          className="creator-input"
          placeholder="Creator Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          disabled={adding}
        />
        <input
          className="creator-input"
          type="number"
          placeholder="Reach"
          value={reach}
          onChange={(e) => setReach(e.target.value)}
          disabled={adding}
        />
        <input
          className="creator-input"
          placeholder="Suffix (optional)"
          value={suff}
          onChange={(e) => setSuff(e.target.value)}
          disabled={adding}
        />
        <input
          className="creator-input"
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files[0])}
          disabled={adding}
        />

        <button className="creator-btn" onClick={handleAdd} disabled={adding}>
          {adding ? "Adding..." : "ADD CREATOR"}
        </button>
      </div>

      {/* Creator List */}
      <div className="creator-list">
        {creators.map((c) => (
          <div key={c.infid} className="creator-card">
            <video src={c.infvid} controls />
            <div className="creator-info">
              <p>
                <b>Name:</b> {c.infname || "—"}
              </p>
              <p>
                <b>Link:</b> {c.inflink}
              </p>
              <p>
                <b>Reach:</b> {c.infreach}
              </p>
              <p>
                <b>Suffix:</b> {c.infsuff || "—"}
              </p>
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDelete(c.infid)}
              disabled={deletingId === c.infid}
            >
              {deletingId === c.infid ? "Deleting..." : "DELETE"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
