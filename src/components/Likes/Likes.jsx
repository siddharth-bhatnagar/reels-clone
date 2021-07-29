import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/firebase';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function Likes({ user, post }) {
    const [like, setLike] = useState(null);

    useEffect(() => {
        const check = post.likes.includes(user.userID) ? true : false;
        setLike(check);
    }, [post]);

    const handleLike = async () => {
        if (like) {
            let arr = post.likes.filter((userID) => {
                return userID !== user.userID;
            });

            await database.posts.doc(post.postDocID).update({
                likes: arr
            });
        }
        else {
            let arr = [...post.likes, user.userID];
            await database.posts.doc(post.postDocID).update({
                likes: arr
            });
        }
    }

    return (
        <>
            {
                like === null ? <></> : like === false ?
                    <>
                        <IconButton onClick={handleLike}>
                            <FavoriteBorderOutlined />
                        </IconButton>
                    </>
                    :
                    <>
                        <IconButton onClick={handleLike}>
                            <FavoriteOutlined style={{ color: "#ff6347" }} />
                        </IconButton>
                    </>
            }
        </>
    );
}

export default Likes;
