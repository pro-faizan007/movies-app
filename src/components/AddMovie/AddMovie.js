import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import movieContext from '../../context/Movie/movieContext';
import Alerts from '../Alert/Alert';


export default function MovieBox() {
    const context = useContext(movieContext)
    const { addMovieModal, setEditBox, addMovieBox, setAddMovieBox, addNewMovie, setAddMovieModal } = context

    const handleClose = () => {
        setAddMovieModal({
            isVisible: false
        })
    }
    const change = (e) => {
        setAddMovieBox({ ...addMovieBox, [e.target.name]: e.target.value })
    }
    return (
        <div>

            <Dialog open={addMovieModal.show}>
                <Alerts />
                <DialogTitle>Add Movie</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Add your favourite Movie
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        name='title'
                        value={addMovieBox.title}
                        onChange={change}
                    />
                    <label for="exampleFormControlSelect1">Select Genre</label>
                    <select class="form-control w-100" id="exampleFormControlSelect1" name='genre' onChange={change} autoFocus
                        margin="dense" fullWidth
                        variant="standard">
                        <option>Action</option>
                        <option>Comedy</option>
                        <option>Thriller</option>
                    </select>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Stock"
                        type="text"
                        name='stock'
                        fullWidth
                        variant="standard"
                        value={addMovieBox.stock}
                        onChange={change}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Rate"
                        type="text"
                        name='rate'
                        fullWidth
                        variant="standard"
                        value={addMovieBox.rate}
                        onChange={change}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addNewMovie}> Add Movie</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}



