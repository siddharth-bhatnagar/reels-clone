import React, { useState, useEffect } from 'react';
import { CardContent, List, ListItem, ListItemAvatar, Avatar, ListItemText, CircularProgress } from '@material-ui/core';
import { database } from '../../firebase/firebase';
import { useStyles } from './Style';
import ScrollToBottom from 'react-scroll-to-bottom';

function Comments(props) {

    const classes = useStyles();
    const [comments, setComments] = useState(null);

    useEffect(async () => {
        let arr = [];
        for (let i = 0; i < props.post.comments.length; i++) {
            let cid = props.post.comments[i];
            let data = await database.comments.doc(cid).get();
            arr.push({ ...data.data(), cid: cid });
        }
        setComments(arr);
    }, [props.post])

    return (
        <CardContent className={classes.comments}>
            {
                comments === null ? <CircularProgress style={{ position: "relative", top: "50%", left: "40%" }} /> :
                    <ScrollToBottom>
                        <List dense={true}>
                            {
                                comments.map((comment) => (
                                    <ListItem key={comment.cid}>
                                        <ListItemAvatar>
                                            <Avatar src={comment?.profileURL} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<p><span style={{ fontWeight: 'bold', display: 'inline-block', fontSize: "16px" }} >{comment.userName}</span>&nbsp;&nbsp;<span style={{display: "inline-block", fontSize: "14px"}}>{comment.text}</span></p>}
                                        />
                                    </ListItem>
                                ))
                            }

                        </List>
                    </ScrollToBottom>
            }
        </CardContent>
    );
}

export default Comments;
