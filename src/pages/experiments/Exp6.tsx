import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { type SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Exp6() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="warning"
                    // variant="filled"
                    sx={{ width: '100%' }}
                >
                    This is a success Alert inside a Snackbar!
                </Alert>

            </Snackbar>
        </div>
    );
}