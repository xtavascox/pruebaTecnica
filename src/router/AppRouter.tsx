
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Dashboard, Login } from "../components";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const AppRouter = () => {
    const { auth } = useSelector((state: RootState) => state);
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {auth.bloqueado && <Route path="/" element={<Login />} />}
                    {!auth.bloqueado &&<Route path="/dashboard" element={<Dashboard />} />}

                    <Route path="*" element={<Login/>}/>
                    
                </Routes>
            </div>
        </BrowserRouter>
    )
}
