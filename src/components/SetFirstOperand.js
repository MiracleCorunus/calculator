import { Button, Box, TextField } from '@material-ui/core';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types'
const useStyles = makeStyles((theme) => ({
    formControl: {
        wdith: "100%"
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const SetFirstOperand = ({ changeFirst, firstOperand, onChangeFlg }) => {
    const classes = useStyles();

    const onChangeHandler = (e) => {
        changeFirst(e.target.value);
    }

    const theme = createTheme({
        palette: {
            primary: green,
        },
        typography: {
            button: {
                textTransform: 'none',
                fontSize: "20px",
            }
        },

    });

    return (
        <div style={{ width: "100%" }}>
            <h1 style={{ ...styles.title, marginTop: "150px" }}>
                Expression
            </h1>
            <h1 style={styles.title}>
                Evalutor
            </h1>


            <Grid container spacing={2} style={{ ...styles.inputContainer, textAlign: "center", }}>
                <Grid item xs={12} sm={7} style={{ margin: "auto" }}>
                    <div className={classes.root}>
                        <Grid container spacing={2} style={{ textAlign: "center", }}>
                            <Grid item xs={12} sm={6} style={{ margin: "auto" }}>
                                <TextField value={firstOperand} onChange={onChangeHandler} label="Please enter a number" variant="filled" style={{ ...styles.inputWidth }} />
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ margin: "auto" }}>
                                <ThemeProvider theme={theme}>
                                    <Button style={{ ...styles.inputWidth, color: "white" }} variant="contained" color="primary" onClick={() => {
                                        if (isNaN(firstOperand) || firstOperand == "")
                                            alert("You should type the number");
                                        else
                                            onChangeFlg(1);
                                    }}>Add Number</Button>
                                </ThemeProvider>
                            </Grid>

                        </Grid>
                    </div>
                </Grid>
            </Grid>

        </div >
    )
}


const styles = {
    title: {
        color: "lightgreen",
        fontSize: 55,
        margin: "auto",
        width: 'fit-content',
        fontWeight: 'lighter'
    },

    inputWidth: {
        width: "100%",
    },

    inputContainer: {
        margin: "auto",
        marginTop: "60px",
        width: "100%"
    }
}

SetFirstOperand.propTypes = {
    changeFirst: PropTypes.func,
}
export default SetFirstOperand
