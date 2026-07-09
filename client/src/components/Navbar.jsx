import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        navigate("/");

    };

    return (

        <div
            style={{
                background: "#fff",
                height: "70px",
                padding: "0 30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,.08)"
            }}
        >

            <div>

                <h2>Attendance Management System</h2>

                <small style={{ color: "gray" }}>
                    {new Date().toDateString()}
                </small>

            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px"
                }}
            >

                <h4>👨‍💼 Admin</h4>

                <button
                    onClick={logout}
                    style={{
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "8px"
                    }}
                >
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Navbar;