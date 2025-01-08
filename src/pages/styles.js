import { colors } from '@mui/material';
import { makeStyles } from '@mui/styles';
import niceHero from "../assets/imgs/nice-hero.jpg";

export const useStyles = makeStyles((theme) => ({
    homeWrapper: {
        background: `url(${niceHero})`,
        backgroundSize: "cover",
        position:"relative",
        height: "100%",
        "& > div": {
            background: "#3b3a39c2",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            color: colors.common.white,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            "& > h3": {
                textTransform: "uppercase"
            },

            "& > span": {
                maxWidth: "50%",
                textAlign: "center",
                textShadow: "0px 1px #323130",
            }
        }
    },

    aboutWrapper: {
        padding: 15,
        "& img": {
            maxWidth: "100%"
        }
    },

    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "35px"
    },

    natiqWrapper: {
        padding: 15,
    }

}));
