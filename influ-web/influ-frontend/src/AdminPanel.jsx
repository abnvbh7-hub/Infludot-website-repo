import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminPanel() {
  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/login");
    }
  }, []);

  return (
    <div className="admin-home">
      <div className="admin-home-card">
        <h1>ADMIN PANEL</h1>

        <button
          className="admin-nav-btn"
          onClick={() => nav("/admin/creators")}
        >
          MANAGE CREATORS
        </button>

        <button
          className="admin-nav-btn"
          onClick={() => nav("/admin/brands")}
        >
          MANAGE BRANDS
        </button>
      </div>
    </div>
  );
}
