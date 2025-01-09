import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useStyles } from "../styles";
import { NavLink } from "react-router";

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeWrapper}>
      <Box>
        <Typography variant="h3">Try Natiq Service</Typography>

        <Typography variant="p">
          Natiq is RDI’s state-of-the-art text-to-speech software, that enables
          users to convert their Arabic input text into spoken words with
          different natural voices. This technology is built on Tashkeel, RDI’s
          Arabic Diacritizer. Tashkeel converts raw Arabic text into diacritized
          text, so that it can be read out loud as speech with the proper
          pronunciation. Natiq is an easy-to-use robust software that allows for
          different users’ preferences, resulting in seamless audio-powered
          applications that enrich user experiences and engage audiences.
        </Typography>

        <Button
          component={NavLink}
          to="/natiq"
          variant="contained"
          color="primary"
          data-testid="tryNatiqLink"
        >
          Try Natiq
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
