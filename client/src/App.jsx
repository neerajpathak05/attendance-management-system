import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Classes from "./pages/Classes";
import Subjects from "./pages/Subjects";
import Attendance from "./pages/Attendance";

function App() {
    return (
        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/students" element={<Students />} />

            <Route path="/teachers" element={<Teachers />} />

            <Route path="/classes" element={<Classes />} />

            <Route path="/subjects" element={<Subjects />} />

            <Route path="/attendance" element={<Attendance />} />

        </Routes>
    );
}

export default App;