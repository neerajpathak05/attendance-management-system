import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Attendance() {

    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [attendance, setAttendance] = useState([]);

    const [form, setForm] = useState({
        student: "",
        teacher: "",
        subject: "",
        status: "Present"
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {

            const studentRes = await API.get("/students");
            const teacherRes = await API.get("/teachers");
            const subjectRes = await API.get("/subjects");
            const attendanceRes = await API.get("/attendance");

            setStudents(studentRes.data.students);
            setTeachers(teacherRes.data.teachers);
            setSubjects(subjectRes.data.subjects);
            setAttendance(attendanceRes.data.attendance);

        } catch (err) {

            console.log(err);

        }

    };

    const markAttendance = async (e) => {

        e.preventDefault();

        try {

            await API.post("/attendance", form);

            alert("Attendance Marked Successfully");

            setForm({
                student: "",
                teacher: "",
                subject: "",
                status: "Present"
            });

            loadData();

        } catch (err) {

            alert(err.response?.data?.message || "Error");

        }

    };

    return (

        <div style={{ display: "flex" }}>

            <Sidebar />

            <div style={{ marginLeft: "240px", width: "100%" }}>

                <Navbar />

                <div style={{ padding: "30px" }}>

                    <h1>Attendance Management</h1>

                    <div className="card" style={{ marginTop: "20px" }}>

                        <h2>Mark Attendance</h2>

                        <form
                            onSubmit={markAttendance}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "15px",
                                marginTop: "20px"
                            }}
                        >

                            <select
                                value={form.student}
                                onChange={(e) => setForm({ ...form, student: e.target.value })}
                            >
                                <option value="">Select Student</option>

                                {
                                    students.map(student => (

                                        <option
                                            key={student._id}
                                            value={student._id}
                                        >
                                            {student.user?.name}
                                        </option>

                                    ))
                                }

                            </select>

                            <select
                                value={form.teacher}
                                onChange={(e) => setForm({ ...form, teacher: e.target.value })}
                            >
                                <option value="">Select Teacher</option>

                                {
                                    teachers.map(teacher => (

                                        <option
                                            key={teacher._id}
                                            value={teacher._id}
                                        >
                                            {teacher.user?.name}
                                        </option>

                                    ))
                                }

                            </select>

                            <select
                                value={form.subject}
                                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            >
                                <option value="">Select Subject</option>

                                {
                                    subjects.map(subject => (

                                        <option
                                            key={subject._id}
                                            value={subject._id}
                                        >
                                            {subject.subjectName}
                                        </option>

                                    ))
                                }

                            </select>

                            <select
                                value={form.status}
                                onChange={(e) => setForm({ ...form, status: e.target.value })}
                            >
                                <option>Present</option>
                                <option>Absent</option>
                            </select>

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
                                Mark Attendance
                            </button>

                        </form>

                    </div>

                    <div className="card" style={{ marginTop: "30px" }}>

                        <h2>Attendance Records</h2>

                        <table>

                            <thead>

                                <tr>

                                    <th>Student</th>
                                    <th>Teacher</th>
                                    <th>Subject</th>
                                    <th>Status</th>
                                    <th>Date</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    attendance.map(record => (

                                        <tr key={record._id}>

                                            <td>{record.student?.user?.name}</td>

                                            <td>{record.teacher?.user?.name}</td>

                                            <td>{record.subject?.subjectName}</td>

                                            <td>{record.status}</td>

                                            <td>
                                                {new Date(record.date).toLocaleDateString()}
                                            </td>

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

export default Attendance;