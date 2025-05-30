import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Username: ${form.username}, Password: ${form.password}`);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <h1 className="mb-4 text-center fw-bold" style={{ fontSize: '2.2rem' }}>Bienvenido a la página de inicio de sesión</h1>
            <div className="card shadow p-4" style={{ minWidth: "350px", maxWidth: "400px", borderRadius: '14px', border: 'none' }}>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Nombre de usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 fw-bold" style={{ background: '#2563eb', border: 'none', fontSize: '1.1rem' }}>Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
}