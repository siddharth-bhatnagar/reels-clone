import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    appBar: {
        height: "4rem",
        display: "flex",
        backgroundColor: "white",
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-between",
        width: "70vw",
        margin: "auto",
        padding: "0"
    },
    iconsContainer: {
        width: "12rem",
        marginLeft: "0",
        marginRight: "0"
    },
    iconBtn: {
        color: "black"
    }
});