import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    feedContainer: {
        height: "calc(100% - 4rem)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    uploadBtn: {
        marginTop: "120px"
    }
});