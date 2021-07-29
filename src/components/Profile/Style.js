import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    imageSection: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    userImageIcon: {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        height: "8rem",
        width: "8rem",
    },
    userName: {
        fontFamily: "Quicksand, sans-serif",
        fontSize: "xx-large",
        color: "#485460",
    },
    userDescription: {
        lineHeight: "2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    videoSection: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "2rem",
        gap: "2rem",
    },
    videoContainer: {
        position: "relative",
    },
    overlayContainer: {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        fontWeight: "lighter",
        fontFamily: "Roboto, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: '#fff',
        backgroundColor: "#211e1e8c",
        opacity: "0",
        zIndex: "2",
    },
    circularLoader: {
        position: "absolute",
        top: "50%",
        left: "50%"
    }
})