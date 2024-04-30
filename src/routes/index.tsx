import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/auth/Login";
import VerifyToken from "../pages/auth/VerifyToken";

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/auth" />}/>
            <Route path="/auth" element={<Login />}/>
            <Route path="/auth/verify" element={<VerifyToken />}/>
        </Routes>
    );
}