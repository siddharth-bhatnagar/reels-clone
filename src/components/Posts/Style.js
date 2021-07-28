import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    mainContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    reelsContainer: {
        margin: "auto",
        width: "33rem",
        height: "100%",
        // overflow: "scroll",
        // scrollSnapType: "y mandatory",
        // scrollbarWidth: "none"
    },
});