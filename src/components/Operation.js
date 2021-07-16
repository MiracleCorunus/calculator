import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react'


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


const Operation = ({ firstOperand, onChangeFlog }) => {
    const classes = useStyles();

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

    const [secondOperand, setSecondOperand] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('0');

    const onChangeSecondHandler = (e) => {
        setSecondOperand(e.target.value);
    }

    const onSelectChange = (e) => {
        setOperator(e.target.value);
    }

    const onResultHandler = (e) => {
        var intFristOperand = parseInt(firstOperand);
        var intSecondOperand = parseInt(secondOperand);

        if (isNaN(firstOperand) || firstOperand == "") {
            alert("You should type the number as first operand!");
        }
        else if (isNaN(secondOperand) || secondOperand == "") {
            alert("You should type the number as second operand!");
        }
        else if (operator == "") {
            alert("Please select the operator!")
        }
        else {
            if (operator == '+')
                setResult(intFristOperand + intSecondOperand);
            if (operator == '-')
                setResult(intFristOperand - intSecondOperand);
            if (operator == '*')
                setResult(intFristOperand * intSecondOperand);
            if (operator == '/')
                setResult(intFristOperand / intSecondOperand);
        }
    }

    return (
        <div>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={7} style={{ margin: "auto" }}>
                    <HomeIcon style={{ width: "35px", height: "35px", color: "lightgreen", cursor: "pointer" }} onClick={() => {
                        onChangeFlog(0)
                    }} />
                </Grid>
            </Grid>
            <div style={styles.container}>

                <div style={styles.spanContainer}>
                    <span style={styles.span}>
                        {firstOperand}
                    </span>
                    <span style={styles.span}>
                        {secondOperand}
                    </span>
                    <span style={styles.span}>
                        {operator}
                    </span>
                </div>
                <p style={styles.equal}>=</p>
                <div style={{ ...styles.spanContainer, marginBottom: "30px" }}>
                    <span style={{ margin: 'auto', fontSize: "70px", fontWeight: "lighter", color: "green", width: "fit-content" }}>
                        {result}
                    </span>
                </div>
                <Grid container spacing={3} style={{ textAlign: "center", }}>
                    <Grid item xs={12} sm={7} style={{ margin: "auto" }}>
                        <div className={classes.root}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} sm={4}>
                                    <FormControl variant="filled" className={classes.formControl} style={styles.inputWidth}>
                                        <InputLabel htmlFor="filled-age-native-simple">Operator</InputLabel>
                                        <Select
                                            value={operator}
                                            onChange={onSelectChange}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={"+"}>+</option>
                                            <option value={"-"}>-</option>
                                            <option value={"*"}>*</option>
                                            <option value={"/"}>/</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <FormControl variant="filled" className={classes.formControl} style={styles.inputWidth}>
                                        <TextField id="filled-basic" label="Operand" variant="filled" value={secondOperand} onChange={onChangeSecondHandler} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <ThemeProvider theme={theme}>
                                        <Button style={{ ...styles.inputWidth, color: "white" }} variant="contained" color="primary" onClick={onResultHandler}>
                                            Add Operation
                                        </Button>
                                    </ThemeProvider>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const styles = {
    container: {
        marginTop: "150px",
    },
    spanContainer: {
        display: 'flex',
        margin: 'auto',
        width: 'fit-content'
    },
    span: {
        width: "70px",
        height: "70px",
        display: 'flex',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        marginLeft: "10px",
        fontSize: "22px"
    },
    equal: {
        margin: 'auto',
        width: 'fit-content',
        fontSize: "50px",
        marginTop: "20px",
        marginBottom: "10px",
    },
    inputWidth: {
        width: "100%",
        height: 60
    },
}
Operation.propTypes = {

}
export default Operation
