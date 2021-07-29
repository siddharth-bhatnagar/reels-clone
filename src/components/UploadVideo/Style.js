import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    button: {
        textTransform: "none",
        fontFamily: "Cursive"
    },
    input: {
        display: "none"
    },
    icon: {
        marginRight: "10px",
        color: "#E1306C" 
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "30vw",
        height: "35vh",
        borderRadius: "10px",
        textAlign: "center",
        outline: "none",
    },
}));