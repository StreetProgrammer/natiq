import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Box,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useStyles } from "./styles";
import AudioPlayer from "../components/AudioPlayer";

const Natiq = () => {
  const classes = useStyles();
  const [txt, setTxt] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const handleOnChange = (event) => {
    event.preventDefault();
    setCurrentAudio(null);
    const inputValue = event.target.value;
    const arabic_pattern = /^[ا-ي\s]+$/u;

    if (inputValue === "" || arabic_pattern.test(inputValue)) {
      setTxt(inputValue);
    } else {
      setErrorMessage("We support only Arabic language");
    }
  };

  const callNatiq = () => {
    setLoading(true);
    var formdata = { text: txt };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formdata),
      redirect: "follow",
    };
    fetch("https://echo-6sdzv54itq-uc.a.run.app/natiq", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCurrentAudio(convert(result.wave));
        setTxt("");
      })
      .catch((error) => {
        setErrorMessage("there is error, please try again");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const convert = (_audio) => {
    let audio = _audio;
    audio = audio.replaceAll("_", "/");
    audio = audio.replaceAll("-", "+");

    return "data:audio/wav;base64," + audio;
  };

  return (
    <Box className={classes.natiqWrapper}>
      <Card>
        <CardHeader title="Try Natiq Service" />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderBlock: "1px solid #ddd",
              paddingBlock: "10px",
            }}
          >
            <Typography variant="p">
              The Natiq service will allow the You to write Arabic text. And
              then speak this audio with an electronic voice.
            </Typography>

            <TextField
              id="outlined-basic"
              label="Enter text here"
              variant="outlined"
              value={txt}
              onChange={(e) => handleOnChange(e)}
            />

            {!!currentAudio && <AudioPlayer src={currentAudio} />}
            {errorMessage && (
              <Snackbar
                open={!!errorMessage}
                autoHideDuration={6000}
                onClose={() => setErrorMessage("")}
              >
                <Alert severity="error">{errorMessage}</Alert>
              </Snackbar>
            )}
          </Box>
        </CardContent>
        <CardActions>
          <Button disabled={txt.length === 0} onClick={callNatiq}>
            Echo
          </Button>
        </CardActions>
      </Card>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#00000042",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Natiq;
