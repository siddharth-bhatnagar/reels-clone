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
    leftMediaDiv: {
        position: "relative",
    },
    leftMediaContainer: {
        height: "618px",
        width: "454px",
        display: "flex"
    },
    carousel: {
        position: "relative",
        left: "150.5px"
    },
    carouselImage: {
        height: "427px",
        width: "240px",
        position: "relative",
        top: "100px",
        padding: 0,
        zIndex: "3"
    },
    card: {
        height: "50vh",
        // width: "85%",
        margin: "2%"
    },
    cardLogo: {
        height: "40%",
        width: "80%",
        margin: "auto"
    },
    textField: {
        "& input::placeholder": {
            fontSize: "16px"
        },
        margin: "1.5%",
        marginLeft: "9%",
        width: "82%",
        background: "rgba(var(--b3f,250,250,250),1)"
    },
    btn: {
        backgroundColor: "#0095F6",
        margin: "1.5%",
        marginLeft: "9%",
        width: "82%",
        textTransform: "none",
        fontSize: "16px"
    }
});