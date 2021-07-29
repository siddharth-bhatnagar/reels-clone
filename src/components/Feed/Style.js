import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme)=> ({
    feedContainer: {
        height: "calc(100% - 4rem)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    uploadBtn: {
        marginTop: "120px",
        marginBottom: "20px"
    },
    postsContainer: {
        height: "calc(100vh - 185px)",
        width: "100%",
    },
}));