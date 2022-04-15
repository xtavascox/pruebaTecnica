import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { Dashboard, Login,LookProp,EditProp } from "../components";



export const AppRouter = () => {
    const { auth } = useSelector((state: RootState) => state);
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {auth.bloqueado && <Route path="/" element={<Login />} />}
                    {!auth.bloqueado &&<Route path="/dashboard" element={<Dashboard />} />}
                    {!auth.bloqueado &&<Route path="/dashboard/propiedad/:id" element={<LookProp />} />}
                    {!auth.bloqueado &&<Route path="/dashboard/editar/:id" element={<EditProp />} />}

                    <Route path="*" element={<Login/>}/>
                    
                </Routes>
            </div>
        </BrowserRouter>
    )
}
