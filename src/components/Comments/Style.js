import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme)=>({
    comments: {
        width: "100%",
        height: "calc(100% - 9rem)",
        overflow: "auto",
        wordWrap: "break-word",
    }
}));