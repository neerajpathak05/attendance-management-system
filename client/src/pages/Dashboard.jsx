import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Dashboard() {

    const [data, setData] = useState({
        totalStudents: 0,
        totalTeachers: 0,
        totalClasses: 0,
        totalSubjects: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const res = await API.get("/dashboard");
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const cardStyle = (color) => ({
        background: color,
        color: "white",
        padding: "25px",
        borderRadius: "15px",
        width: "250px",
        height: "140px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        transition: "0.3s"
    });

    return (
        <div style={{ display: "flex" }}>

            <Sidebar />

            <div
                style={{
                    marginLeft: "240px",
                    width: "100%"
                }}
            >

                <Navbar />

                <div style={{ padding: "30px" }}>

                    <h1
                        style={{
                            marginBottom: "25px",
                            color: "#1e293b"
                        }}
                    >
                        Dashboard
                    </h1>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "25px"
                        }}
                    >

                        <div style={cardStyle("#2563eb")}>
                            <h3>Total Students</h3>
                            <h1>{data.totalStudents}</h1>
                        </div>

                        <div style={cardStyle("#16a34a")}>
                            <h3>Total Teachers</h3>
                            <h1>{data.totalTeachers}</h1>
                        </div>

                        <div style={cardStyle("#ea580c")}>
                            <h3>Total Classes</h3>
                            <h1>{data.totalClasses}</h1>
                        </div>

                        <div style={cardStyle("#dc2626")}>
                            <h3>Total Subjects</h3>
                            <h1>{data.totalSubjects}</h1>
                        </div>

                    </div>

                    <div
                        style={{
                            marginTop: "40px",
                            background: "white",
                            padding: "25px",
                            borderRadius: "15px",
                            boxShadow: "0 5px 15px rgba(0,0,0,.08)"
                        }}
                    >

                        <h2>Welcome Admin 👋</h2>

                        <p
                            style={{
                                marginTop: "10px",
                                color: "#555"
                            }}
                        >
                            Manage students, teachers, classes, subjects and attendance from the sidebar.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;