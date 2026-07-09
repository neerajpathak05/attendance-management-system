import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Teachers() {

    const [teachers, setTeachers] = useState([]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        employeeId: "",
        department: ""
    });

    useEffect(() => {
        loadTeachers();
    }, []);

    const loadTeachers = async () => {
        const res = await API.get("/teachers");
        setTeachers(res.data.teachers);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addTeacher = async (e) => {
        e.preventDefault();

        await API.post("/teachers", form);

        alert("Teacher Added Successfully");

        setForm({
            name: "",
            email: "",
            password: "",
            phone: "",
            employeeId: "",
            department: ""
        });

        loadTeachers();
    };

    return (

        <div style={{display:"flex"}}>

            <Sidebar/>

            <div style={{marginLeft:"240px",width:"100%"}}>

                <Navbar/>

                <div style={{padding:"30px"}}>

                    <h1>Teacher Management</h1>

                    <div className="card" style={{marginTop:"20px"}}>

                        <h2>Add Teacher</h2>

                        <form
                        onSubmit={addTeacher}
                        style={{
                            display:"grid",
                            gridTemplateColumns:"1fr 1fr",
                            gap:"15px",
                            marginTop:"20px"
                        }}
                        >

                            <input name="name" placeholder="Teacher Name" value={form.name} onChange={handleChange}/>
                            <input name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
                            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}/>
                            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange}/>
                            <input name="employeeId" placeholder="Employee ID" value={form.employeeId} onChange={handleChange}/>
                            <input name="department" placeholder="Department" value={form.department} onChange={handleChange}/>

                            <button
                            style={{
                                background:"#2563eb",
                                color:"white",
                                border:"none",
                                padding:"12px",
                                borderRadius:"8px"
                            }}
                            >
                                Add Teacher
                            </button>

                        </form>

                    </div>

                    <div className="card" style={{marginTop:"30px"}}>

                        <h2>Teacher List</h2>

                        <table>

                            <thead>

                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Employee ID</th>
                                    <th>Department</th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    teachers.map((teacher)=>(

                                        <tr key={teacher._id}>

                                            <td>{teacher.user?.name}</td>
                                            <td>{teacher.user?.email}</td>
                                            <td>{teacher.employeeId}</td>
                                            <td>{teacher.department}</td>

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

export default Teachers;