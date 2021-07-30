import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    da: {
        height: "100vh",
        width: "75vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "rgba(var(--b3f,250,250,250),1)"
    },
    daa: {
        position: "relative",
    },
    daaa: {
        height: "618px",
        width: "454px",
        display: "flex"
    },
    ca: {
        position: "relative",
        left: "150.5px"
    },
    cai: {
        height: "427px",
        width: "240px",
        position: "relative",
        top: "100px",
        padding: 0,
        zIndex: "3"
    },
    carda: {
        height: "15rem",
        width: "15rem",
        margin: "0.5rem"
    },
    cardLogoo: {
        height: "100px",
        width: "250px",
        margin: "auto"
    },
    tf: {
        "& input::placeholder": {
            fontSize: "16px"
        },
        margin: "0.3rem",
        marginLeft: "1.5rem",
        marginRight: "1.5rem",
        height: "40px",
        width: "312px",
        background: "rgba(var(--b3f,250,250,250),1)"
    },
    bbbbbbbbbtn: {
        backgroundColor: "#0095F6",
        margin: "0.3rem",
        marginLeft: "1.5rem",
        marginRight: "1.5rem",
        width: "312px",
        height: "35px",
        textTransform: "none",
        fontSize: "16px"
    }
}));