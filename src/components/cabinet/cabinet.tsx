import OutputIcon from '@mui/icons-material/Output';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './cabinet.scss'
import { CabinetHeader } from './cabinetHeader'

export const Cabinet = () => {

    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <main>
            <h1>Cabinetul meu </h1>

            <div style={{ display: 'flex', justifyContent: 'center', padding: 12 }}>
                <Button onClick={signOut} variant="outlined" startIcon={<OutputIcon />}>
                    Iesire
                </Button>
            </div>

            <CabinetHeader />
        </main>
    )
}