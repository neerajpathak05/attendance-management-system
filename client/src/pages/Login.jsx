import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data.token);

            alert("Login Successful");

            navigate("/dashboard");

        } catch (err) {

            alert(err.response?.data?.message || "Invalid Credentials");

        }

    };

    return (

        <div
            style={{
                height: "100vh",
                background: "linear-gradient(135deg,#2563eb,#1d4ed8,#1e3a8a)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <div
                style={{
                    width: "420px",
                    background: "white",
                    padding: "35px",
                    borderRadius: "15px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
            >

                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "30px"
                    }}
                >

                    <h1 style={{ color: "#2563eb" }}>
                        🎓 AMS
                    </h1>

                    <h2>Attendance Management System</h2>

                    <p style={{ color: "gray" }}>
                        Admin Login
                    </p>

                </div>

                <form onSubmit={loginHandler}>

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <br /><br />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <br /><br />

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            background: "#2563eb",
                            color: "white",
                            border: "none",
                            padding: "13px",
                            borderRadius: "8px",
                            fontSize: "17px",
                            fontWeight: "bold"
                        }}
                    >
                        Login
                    </button>

                </form>

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "25px",
                        color: "gray"
                    }}
                >

                    <small>
                        Online Attendance Management System
                    </small>

                    <br />

                    <small>
                        B.Tech CSE Project
                    </small>

                </div>

            </div>

        </div>

    );

}

export default Login;