import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from './Style';
import { Alert } from '@material-ui/lab';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

function UploadVideo() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const handleUpload = (e) => {
        
    }

    return (
        <>
            {
                error != null ? <Alert severity="error">{error}</Alert> :
                    <>
                        <input
                            color="primary"
                            type="file"
                            accept="file"
                            onChange={handleUpload}
                            id="icon-button-file"
                            className={classes.input}
                        />
                        <label htmlFor="icon-button-file">
                            <Button variant="outlined" disabled={loading} color="secondary" className={classes.button}>
                                <MovieFilterIcon className={classes.icon} />
                                Video
                            </Button>
                        </label>
                    </>
            }
        </>
    );
}

export default UploadVideo;
