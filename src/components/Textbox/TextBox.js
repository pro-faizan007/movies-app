import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import movieContext from '../../context/Movie/movieContext';

export default function TextBox() {
    const context = useContext(movieContext)
    const { editBox, setEditBox, editMovieBox, setEditMovieBox, movieUpdateBox } = context
    //const { title, genre, stock, rate } = editMovieBox
    const handleClose = () => {
        setEditBox({
            isVisible: false
        })
    }
    const change = (e) => {
        setEditMovieBox({ ...editMovieBox, [e.target.name]: e.target.value })
    }
    return (
        <div>

            <Dialog open={editBox.isVisible}>
                <DialogTitle>Update Box</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {editMovieBox.title}
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
                        value={editMovieBox.title}
                        onChange={change}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Genre"
                        type="text"
                        name='genre'
                        fullWidth
                        variant="standard"
                        value={editMovieBox.genre}
                        onChange={change}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Stock"
                        type="text"
                        name='stock'
                        fullWidth
                        variant="standard"
                        value={editMovieBox.stock}
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
                        value={editMovieBox.rate}
                        onChange={change}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={movieUpdateBox}>Update </Button>
                    {/* <Button onClick={addNewMovie}> Add Movie</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    )
}
