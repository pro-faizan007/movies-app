
import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import movieContext from '../../context/Movie/movieContext';


export default function Alerts() {
    const context = useContext(movieContext)
    const { alert, closeAlert } = context
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            {alert === '' ? "" : <Alert onClose={closeAlert}>{alert}</Alert>}
        </Stack>
    );
}
