import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Subjects() {

    const [subjects, setSubjects] = useState([]);

    const [form, setForm] = useState({
        subjectName: "",
        subjectCode: "",
        semester: ""
    });

    useEffect(() => {
        loadSubjects();
    }, []);

    const loadSubjects = async () => {
        const res = await API.get("/subjects");
        setSubjects(res.data.subjects);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addSubject = async (e) => {

        e.preventDefault();

        try {

            await API.post("/subjects", form);

            alert("Subject Added Successfully");

            setForm({
                subjectName: "",
                subjectCode: "",
                semester: ""
            });

            loadSubjects();

        } catch (err) {

            alert(err.response?.data?.message || "Error");

        }

    };

    return (

        <div style={{display:"flex"}}>

            <Sidebar/>

            <div style={{marginLeft:"240px",width:"100%"}}>

                <Navbar/>

                <div style={{padding:"30px"}}>

                    <h1>Subject Management</h1>

                    <div className="card" style={{marginTop:"20px"}}>

                        <h2>Add Subject</h2>

                        <form
                        onSubmit={addSubject}
                        style={{
                            display:"grid",
                            gridTemplateColumns:"1fr 1fr",
                            gap:"15px",
                            marginTop:"20px"
                        }}
                        >

                            <input
                            name="subjectName"
                            placeholder="Subject Name"
                            value={form.subjectName}
                            onChange={handleChange}
                            />

                            <input
                            name="subjectCode"
                            placeholder="Subject Code"
                            value={form.subjectCode}
                            onChange={handleChange}
                            />

                            <input
                            name="semester"
                            placeholder="Semester"
                            value={form.semester}
                            onChange={handleChange}
                            />

                            <div></div>

                            <button
                            style={{
                                background:"#2563eb",
                                color:"white",
                                border:"none",
                                padding:"12px",
                                borderRadius:"8px",
                                fontSize:"16px"
                            }}
                            >
                                Add Subject
                            </button>

                        </form>

                    </div>

                    <div className="card" style={{marginTop:"30px"}}>

                        <h2>Subject List</h2>

                        <table>

                            <thead>

                                <tr>

                                    <th>Subject Name</th>
                                    <th>Subject Code</th>
                                    <th>Semester</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    subjects.map(subject=>(

                                        <tr key={subject._id}>

                                            <td>{subject.subjectName}</td>

                                            <td>{subject.subjectCode}</td>

                                            <td>{subject.semester}</td>

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

export default Subjects;