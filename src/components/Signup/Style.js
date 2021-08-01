import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    mainContainer: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "rgba(var(--b3f,250,250,250),1)"
    },
    card: {
        width: "100%"
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
        margin: "2.5%",
        marginLeft: "10%",
        marginRight: "10%",
        height: "40px",
        width: "80%",
        background: "rgba(var(--b3f,250,250,250),1)"
    },
    btn: {
        backgroundColor: "#0095F6",
        margin: "2%",
        marginLeft: "10%",
        width: "80%",
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