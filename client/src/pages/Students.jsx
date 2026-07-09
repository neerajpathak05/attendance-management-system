import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Students() {

    const [students, setStudents] = useState([]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        rollNumber: "",
        semester: "",
        section: ""
    });

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const res = await API.get("/students");
            setStudents(res.data.students);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addStudent = async (e) => {
        e.preventDefault();

        try {

            await API.post("/students", form);

            alert("Student Added Successfully");

            setForm({
                name: "",
                email: "",
                password: "",
                phone: "",
                rollNumber: "",
                semester: "",
                section: ""
            });

            loadStudents();

        } catch (err) {

            alert(err.response?.data?.message || "Something went wrong");

        }
    };

    return (

        <div style={{ display: "flex" }}>

            <Sidebar />

            <div style={{ marginLeft: "240px", width: "100%" }}>

                <Navbar />

                <div style={{ padding: "30px" }}>

                    <h1 style={{ marginBottom: "20px" }}>
                        Student Management
                    </h1>

                    <div className="card">

                        <h2>Add Student</h2>

                        <form
                            onSubmit={addStudent}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "15px",
                                marginTop: "20px"
                            }}
                        >

                            <input
                                name="name"
                                placeholder="Student Name"
                                value={form.name}
                                onChange={handleChange}
                            />

                            <input
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                            />

                            <input
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                            />

                            <input
                                name="rollNumber"
                                placeholder="Roll Number"
                                value={form.rollNumber}
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
                                type="submit"
                                style={{
                                    background: "#2563eb",
                                    color: "white",
                                    border: "none",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    fontSize: "16px"
                                }}
                            >
                                Add Student
                            </button>

                        </form>

                    </div>

                    <div
                        className="card"
                        style={{ marginTop: "30px" }}
                    >

                        <h2>Student List</h2>

                        <table>

                            <thead>

                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Roll No</th>
                                    <th>Semester</th>
                                    <th>Section</th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    students.map(student => (

                                        <tr key={student._id}>

                                            <td>{student.user?.name}</td>
                                            <td>{student.user?.email}</td>
                                            <td>{student.rollNumber}</td>
                                            <td>{student.semester}</td>
                                            <td>{student.section}</td>

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

export default Students;