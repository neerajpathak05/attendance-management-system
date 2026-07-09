import { Link } from "react-router-dom";

function Sidebar(){

    return(

        <div
        style={{
            width:"240px",
            background:"#1e3a8a",
            color:"white",
            minHeight:"100vh",
            padding:"20px",
            position:"fixed",
            left:0,
            top:0
        }}
        >
<h2
style={{
    textAlign:"center",
    marginBottom:"40px",
    color:"white"
}}
>
🎓 AMS
</h2>

            <Link className="menu" to="/dashboard">
🏠 Dashboard
</Link>

<Link className="menu" to="/students">
👨‍🎓 Students
</Link>

<Link className="menu" to="/teachers">
👨‍🏫 Teachers
</Link>

<Link className="menu" to="/classes">
🏫 Classes
</Link>

<Link className="menu" to="/subjects">
📚 Subjects
</Link>

<Link className="menu" to="/attendance">
✅ Attendance
</Link>

        </div>

    );

}

export default Sidebar;