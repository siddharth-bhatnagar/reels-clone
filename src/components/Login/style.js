import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    mainContainer: {
        height: "100vh",
        width: "80vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },
    cardMedia: {
        backgroundSize: "contain",
        height: "86vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    carouselContainer: { 
        height: "26rem", 
        width: "15rem", 
        marginLeft: "5.5rem" 
    }
});