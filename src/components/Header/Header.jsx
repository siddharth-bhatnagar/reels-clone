import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { AppBar, Toolbar, Container, IconButton, Avatar, Menu, MenuItem, Fade, Hidden, LinearProgress } from '@material-ui/core';
import { Home, ExploreOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStyles } from './Style';

function Header({ loading, setLoading, user }) {
    const classes = useStyles();
    const { logout } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleAnchorElClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleSignout = async (e) => {
        try {
            setLoading(true);
            await logout();
            setLoading(false);
        }
        catch (err) {
            console.log(err.message);
            setLoading(false);
        }
    }

    return (
        <>
            <AppBar className={classes.appBar} position="fixed">
                {loading ? <LinearProgress color="secondary" /> : <></>}
                {loading ? <LinearProgress color="secondary" /> : <></>}
                <Toolbar className={classes.toolBar}>
                    <Hidden xsDown>
                        <img height="100%" width="200vw" src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg" alt="" />
                    </Hidden>
                    <Container className={classes.iconsContainer}>
                        <IconButton className={classes.iconBtn}>
                            <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
                                <Home onClick={() => window.scrollTo(0, 0)} />
                            </Link>
                        </IconButton>
                        <IconButton className={classes.iconBtn}>
                            <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
                                <ExploreOutlined />
                            </Link>
                        </IconButton>
                        <IconButton style={{ paddingBottom: "0.8rem" }} onClick={handleAnchorElClick}>
                            <Avatar alt="Profile" style={{ height: "1.3rem", width: "1.3rem" }} src={user?.profileURL} />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                        >
                            <MenuItem>
                                <Link to="/profile" style={{ padding: "0", textDecoration: "none", color: "inherit" }}>
                                    Profile
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleSignout}>Sign out</MenuItem>
                        </Menu>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
