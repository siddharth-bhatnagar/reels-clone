import React, { useState } from 'react';
import { IconButton, CardActions, TextField } from '@material-ui/core';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useStyles } from './Style';
import { database } from '../../firebase/firebase';

function AddComments({ post = null, user = null, setError, loading, setLoading }) {

    const classes = useStyles();
    const [text, setText] = useState('');

    const handleComment = () => {
        setLoading(true);
        let commentObject = {
            text: text,
            profileURL: user?.profileURL,
            userName: user?.username
        }
        // console.log(commentObject);
        database.comments.add(commentObject).then((docRef) => {
            database.posts.doc(post.postDocID).update({
                comments: [...post.comments, docRef.id]
            })
        }).then(() => {
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setTimeout(() => {
                setError('');
            }, 2000);
        });

        setText('');
    }

    return (
        <CardActions className={classes.addComment}>
            <TextField
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && text !== '') {
                        e.preventDefault();
                        handleComment();
                    }
                }}
                value={text}
                label="Add a comment"
                style={{ width: "13.5rem" }}
                color="secondary"
                onChange={(e) => setText(e.target.value)}
            />
            <IconButton style={{ marginLeft: "10px" }} disabled={text === '' || loading ? true : false} onClick={handleComment}>
                <SendOutlinedIcon />
            </IconButton>
        </CardActions>
    );
}

export default AddComments;
