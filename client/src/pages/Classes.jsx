import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Classes() {

    const [classes, setClasses] = useState([]);

    const [form, setForm] = useState({
        className: "",
        semester: "",
        section: ""
    });

    useEffect(() => {
        loadClasses();
    }, []);

    const loadClasses = async () => {
        const res = await API.get("/classes");
        setClasses(res.data.classes);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addClass = async (e) => {

        e.preventDefault();

        await API.post("/classes", form);

        alert("Class Added Successfully");

        setForm({
            className: "",
            semester: "",
            section: ""
        });

        loadClasses();

    };

    return (

        <div style={{ display: "flex" }}>

            <Sidebar />

            <div style={{ marginLeft: "240px", width: "100%" }}>

                <Navbar />

                <div style={{ padding: "30px" }}>

                    <h1>Class Management</h1>

                    <div className="card" style={{ marginTop: "20px" }}>

                        <h2>Add Class</h2>

                        <form
                            onSubmit={addClass}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "15px",
                                marginTop: "20px"
                            }}
                        >

                            <input
                                name="className"
                                placeholder="Class Name"
                                value={form.className}
                                onChange={handleChange}
                            />

                            <input
                                name="semester"
                                placeholder="Semester"
                                value={form.semester}
                                onChange={handleChange}
                            />

                            <input
                                name="section"
                                placeholder="Section"
                                value={form.section}
                                onChange={handleChange}
                            />

                            <div></div>

                            <button
                                style={{
                                    background: "#2563eb",
                                    color: "white",
                                    border: "none",
                                    padding: "12px",
                                    borderRadius: "8px"
                                }}
                            >
                                Add Class
                            </button>

                        </form>

                    </div>

                    <div className="card" style={{ marginTop: "30px" }}>

                        <h2>Class List</h2>

                        <table>

                            <thead>

                                <tr>

                                    <th>Class</th>
                                    <th>Semester</th>
                                    <th>Section</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    classes.map((cls) => (

                                        <tr key={cls._id}>

                                            <td>{cls.className}</td>
                                            <td>{cls.semester}</td>
                                            <td>{cls.section}</td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Classes;