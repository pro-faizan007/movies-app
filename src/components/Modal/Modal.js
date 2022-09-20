import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import movieContext from '../../context/Movie/movieContext';
import Checkbox from '@mui/material/Checkbox';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 14,
    p: 4,
};

export default function Modale() {


    const context = useContext(movieContext)
    const { showModal, deleteItem, closeModal, boxChecked, isCheckedConfirm } = context

    return (
        <div>

            <Modal
                open={showModal.isVisible}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <input type="checkbox" onChange={boxChecked} /> Don't Show this message again?
                        Are you sure you want to delete this?
                        <Button onClick={deleteItem} >Delete</Button>
                        <Button onClick={closeModal}>Close</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
