import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    mainContainer: {
        height: "100vh",
        width: "80%",
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
        left: "150.5px",
        height: "600px"
    },
    carouselImage: {
        height: "100%",
        width: "240px",
        position: "relative",
        top: "100px",
        padding: 0,
        zIndex: "3"
    },
    card: {
        height: "50vh",
        width: "85%",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        margin: "2%",
        '@media (maxWidth: 1000px)': {
            width: '100%'
        }
    },
    cardLogo: {
        height: "30%",
        width: "70%",
        margin: "5%",
        marginLeft: "15%"
    },
    textField: {
        "& input::placeholder": {
            fontSize: "16px"
        },
        width: "82%",
        background: "rgba(var(--b3f,250,250,250),1)"
    }
});