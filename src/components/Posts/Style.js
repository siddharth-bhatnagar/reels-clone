import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
    likeStat: {
        fontSize: "18px",
        fontWeight: "bold",
    },
    modal: {
        width: "40rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        margin: "0"
    },
    videoContainer: {
        height: "25rem",
        width: "20rem",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        margin: "0"
    },
    commentBox: {
        height: "25rem",
        width: "calc(100% - 20rem)",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
    },
}));