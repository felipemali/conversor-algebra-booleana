import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

const ContentHome = () => {
  const [boxOne, setBoxOne] = React.useState("");
  const [boxTwo, setBoxTwo] = React.useState("");
  const [boxThree, setBoxThree] = React.useState("");
  const [result, setResult] = React.useState("");
  const [error, setError] = React.useState("none");
  const [teste, setTeste] = React.useState([]);

  console.log(teste);
  const buttonsFuncoes = [
    {
      name: "OR",
      id: "or",
    },
    {
      name: "AND",
      id: "and",
    },
    {
      name: "NOT",
      id: "not",
    },
    {
      name: "NAND",
      id: "nand",
    },
    {
      name: "NOR",
      id: "nor",
    },
  ];

  const expressao = () => {
    // setTeste([...teste, "A"]);
    if (boxOne == "0" && boxTwo == "0" && boxThree == "1") {
      setTeste("A/.B/.C+");
    } else if (boxOne == "0" && boxTwo == "1" && boxThree == "0") {
      setTeste([...teste, "A/.B.C/+"]);
    } else if (boxOne == "0" && boxTwo == "1" && boxThree == "1") {
      setTeste([...teste, "A/.B.C+"]);
      console.log(teste.join(""));
    } else if (boxOne == "1" && boxTwo == "0" && boxThree == "0") {
      setTeste([...teste, "A.B/.C/+"]);
    } else if (boxOne == "1" && boxTwo == "0" && boxThree == "1") {
      setTeste([...teste, "A.B/.C+"]);
    } else if (boxOne == "1" && boxTwo == "1" && boxThree == "1") {
      setTeste([...teste, "A.B.C+"]);
      console.log(teste.join(""));
    }
  };

  const resultCircuito = (buttonName) => {
    switch (buttonName) {
      case "OR":
        if (boxOne == "1" || boxTwo == "1" || boxThree == "1") {
          setResult("1");
        } else {
          setResult("0");
        }
        break;
      case "AND":
        if (boxOne == "1" && boxTwo == "1" && boxThree == "1") {
          setResult("1");
        } else if (boxOne == "1" && boxTwo == "1" && boxThree == "0") {
          setResult("0");
        } else if (boxOne == "1" && boxTwo == "1") {
          setResult("1");
        } else {
          setResult("0");
        }
        break;
      case "NOT":
        if (
          (boxOne.length == 1 && boxTwo.length == 1) ||
          (boxTwo.length == 1 && boxThree.length == 1) ||
          (boxOne.length == 1 && boxThree.length == 1)
        ) {
          console.log("a função NOT só pode receber uma variavel");
          setError("inline");
          handleClick();
        } else if (boxOne == "1") {
          setResult("0");
        } else if (boxTwo == "1") {
          setResult("0");
        } else if (boxThree == "1") {
          setResult("0");
        } else {
          setResult("1");
        }
        break;
      case "NOR":
        if (boxOne == "0" && boxTwo == "0" && boxThree == "0") {
          setResult("1");
        } else if (boxOne == "0" && boxTwo == "0" && boxThree == "1") {
          setResult("0");
        } else if (boxOne == "0" && boxTwo == "0") {
          setResult("1");
        } else {
          setResult("0");
        }
    }
  };
  const [open, setOpen] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} sx={{ width: "100%" }} severity="error">
            A função NOT só pode receber uma variavel, verifique e tente
            novamente!
          </Alert>
        </Snackbar>
      </Stack>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 295,
          ml: "auto",
          mr: "auto",
          mt: 3,
        }}
      >
        <Card sx={{ pb: 2.5 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 24, textAlign: "center" }}
              color="text.secondary"
              gutterBottom
            >
              Converção Circuito
            </Typography>

            <TextField
              autoComplete="off"
              value={boxOne}
              onChange={(e) => setBoxOne(e.target.value)}
              sx={{ width: 60, marginLeft: 3 }}
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              autoComplete="off"
              value={boxTwo}
              onChange={(e) => setBoxTwo(e.target.value)}
              sx={{ width: 60, marginLeft: 2 }}
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              autoComplete="off"
              value={boxThree}
              onChange={(e) => setBoxThree(e.target.value)}
              sx={{ width: 60, marginLeft: 2 }}
              id="outlined-basic"
              variant="outlined"
            />
          </CardContent>
          <CardContent>
            <Typography
              sx={{ fontSize: 20, textAlign: "center" }}
              color="text.secondary"
              gutterBottom
            >
              Resultado
            </Typography>
            <TextField
              disabled
              value={result}
              sx={{
                width: 130,
                margin: "auto",
                display: "block",
              }}
              id="outlined-basic"
              variant="outlined"
            />
          </CardContent>
          <Button
            onClick={() => {
              setBoxOne("");
              setBoxTwo("");
              setBoxThree("");
              setResult("");
            }}
            sx={{
              padding: 1,
              width: 200,
              m: "auto",
              display: "block",
              mb: 1,
            }}
            variant="outlined"
          >
            APAGAR
          </Button>
        </Card>
      </Paper>
      <Box sx={{ display: "flex" }}>
        {buttonsFuncoes.map(({ name, id }) => (
          <Stack
            key={id}
            spacing={60}
            sx={{
              width: 70,
              alignItems: "center",
              mt: 4,
            }}
          >
            <Button
              onClick={() => resultCircuito(name)}
              sx={{ padding: 0.5 }}
              variant="outlined"
            >
              {name}
            </Button>
          </Stack>
        ))}
      </Box>
      <Button>AAAA</Button>
    </>
  );
};
export default ContentHome;
