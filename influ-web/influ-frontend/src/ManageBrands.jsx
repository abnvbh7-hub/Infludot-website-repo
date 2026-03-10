import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageBrands() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const [brands, setBrands] = useState([]);
  const [btxt, setBtxt] = useState("");
  const [file, setFile] = useState(null);

  const [adding, setAdding] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (!token) {
      nav("/login");
      return;
    }
    fetchBrands();
  }, []);

  async function fetchBrands() {
    try {
      const res = await fetch(
        "https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/getbrand"
      );
      const data = await res.json();

      if (data.status === "success") {
        setBrands(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleAdd() {
    if (!btxt || !file) {
      alert("Please fill all fields");
      return;
    }

    setAdding(true);

    const formData = new FormData();
    formData.append("btxt", btxt);
    formData.append("file", file);

    try {
      const res = await fetch(
        "https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/addbrand",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setBtxt("");
        setFile(null);
        fetchBrands();
      }
    } catch (err) {
      console.error(err);
    }

    setAdding(false);
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this brand?")) return;

    setDeletingId(id);

    try {
      const res = await fetch(
        `https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/deletebrand?id=${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        fetchBrands();
      }
    } catch (err) {
      console.error(err);
    }

    setDeletingId(null);
  }

  return (
    <div className="brand-page">
      <h1>Manage Brands</h1>

      {/* Add Brand */}
      <div className="brand-form">
        <input
          className="brand-input"
          placeholder="Brand Text"
          value={btxt}
          onChange={(e) => setBtxt(e.target.value)}
          disabled={adding}
        />

        <input
          className="brand-input"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          disabled={adding}
        />

        <button
          className="brand-btn"
          onClick={handleAdd}
          disabled={adding}
        >
          {adding ? "Adding..." : "ADD BRAND"}
        </button>
      </div>

      {/* Brand List */}
      <div className="brand-list">
        {brands.map((b) => (
          <div key={b.bid} className="brand-card">
            <img src={b.bimg} alt="brand" />
            <p>{b.btxt}</p>

            <button
              className="delete-btn"
              onClick={() => handleDelete(b.bid)}
              disabled={deletingId === b.bid}
            >
              {deletingId === b.bid ? "Deleting..." : "DELETE"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
