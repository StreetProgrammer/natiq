import { colors } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    linksWrapper: {
        "& > a": {
            color: colors.common.white,
            marginInline: "10px",
            textDecoration: "none",
        }
    },
    drawerLink: {
        color: colors.blue[600],
        marginInline: "10px",
        textDecoration: "none",
    }
}));
