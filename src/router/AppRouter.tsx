import { FC } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Dashboard, Login } from "../components";

export const AppRouter:FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
