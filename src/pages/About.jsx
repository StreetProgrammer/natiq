import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import { useStyles } from "./styles";
import { NavLink } from "react-router-dom";

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutWrapper}>
      <Grid2
        container
        spacing={2}
        sx={{
          paddingInline: "10vw",
        }}
      >
        <Grid2 size={{ xs: 12, md: 12 }}>
          <Typography>
            RDI, also known as “The Engineering Company for the Development of
            Digital Systems” was founded in 1993. The journey began with a dream
            of developing a base that utilizes creative ideas emerging from
            academia and converts them into practical prototypes. In addition to
            providing an incubator for these prototypes, allowing their further
            development into final products ready to be released on the market.
            As well as, these products come to the light with the effort of a
            team of expert programmers, research engineers, and business
            developers who spend millions of working hours turning ideas and
            dreams into innovative, usable, useful applications to society and
            creating a one-of-a-kind Egyptian company.
          </Typography>
        </Grid2>

        <Grid2 className={classes.content} size={{ xs: 12, md: 7 }}>
          <Typography variant="h4">Our mission</Typography>
          <Typography>
            Realizing leadership and innovation in the CIT world, through an
            economically successful corporation, that creates outstanding
            products and services, contributing to the betterment of society
            through the development of digital systems.
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <img src="https://cdn-gceod.nitrocdn.com/kaLRsxNjbgXNaKuhdzkUDQAgUbeNnCIm/assets/images/optimized/rev-ac456f3/rdi-eg.ai/wp-content/uploads/2020/11/About-RDI.png" />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 5 }}>
          <img src="https://cdn-gceod.nitrocdn.com/kaLRsxNjbgXNaKuhdzkUDQAgUbeNnCIm/assets/images/optimized/rev-ac456f3/rdi-eg.ai/wp-content/uploads/2020/10/we-serve-arabic2.png" />
        </Grid2>
        <Grid2 className={classes.content} size={{ xs: 12, md: 7 }}>
          <Typography variant="h4">History</Typography>
          <Typography>
            RDI "The Engineering Company for the Development of Digital Systems"
            attained regional and international recognition, due to its
            successful participation over the years in national and
            multinational projects, as well as the awards RDI received for its
            distinctive works. Our Company has highly qualified employees
            specialized in the fields of research (speech processing, NLP, OCR)
            and applications development (web, desktop, mobile) using state of
            the art technologies and tools. We also specialized in e-learning
            solutions (edutainment), digitization, 3D graphics, and multimedia
            cultural titles.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default About;
