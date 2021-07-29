import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    mainContainer: {
        height: "100vh",
        width: "75vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "rgba(var(--b3f,250,250,250),1)"
    },
    card: {
        height: "23rem",
        width: "15rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "1rem",
    },
    cardLogo: {
        height: "100px",
        width: "250px",
        margin: "auto"
    },
    cardText: {
        color: "#8E8E8E",
        fontSize: "17px",
        fontWeight: "600",
        lineHeight: "20px",
        textAlign: "center",
        margin: "0 40px 10px"
    },
    textField: {
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
    btn: {
        backgroundColor: "#0095F6",
        margin: "0.3rem",
        marginLeft: "1.5rem",
        marginRight: "1.5rem",
        width: "312px",
        height: "35px",
        textTransform: "none",
        fontSize: "16px"
    },
    textElement: {
        color: "#262626",
        marginTop: "1rem",
        fontSize: "16px",
        margin: "auto"
    }
});