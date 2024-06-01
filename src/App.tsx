import React, { useState, useEffect, useContext, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, TextField } from '@mui/material';

const MyContext = React.createContext({});

const BmrApp = () => {

  // useEffect(() => {
  //   function handleResize() {
  //     setWidth(window.innerWidth)
  //   }
  //   if (window.innerWidth >= 0) {
  //     setWidth(window.innerWidth)
  //   }
  //   // Questo codice verrà eseguito dopo il caricamento del DOM
  //   // console.log('Il DOM è completamente caricato');

  //   window.addEventListener("resize", handleResize)

  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, [setWidth]);

  return (
    <BrowserRouter>
      <Box>
        <Routes>
          <Route path='/' element={<PrincipalPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

interface MobileProps {
  handleGender?: () => void;
  textBtn?: string;
  el?: any;
}

type TextFiledProps = {
  className?: any;
  key?: number | string;
  variant?: any;
  type?: string;
  value?: string | any;
  label?: string;
  InputProps?: any;
  children?: string;
  style?: object;
  onChange?: any;
}

const PrincipalPage = (props: TextFiledProps) => {
  const [chooseGender, setChooseGender]: any = useState(false); // false sta per uomo, true per donna
  function handleGender(): any {
    setChooseGender(!chooseGender);
  }

  const [field1, setField1] = useState(0);
  const [field2, setField2] = useState(0);
  const [field3, setField3] = useState(0);

  function HandleBmr(a: number, b: number, c: number): any {
    //in Man: BMR=66.4730 + 13.7516 x weight in kg + 5.0033 x height in cm – 6.7550 x age in years.
    //In women, BMR=655.0955 + 9.5634 x weight in kg + 1.8496 x height in cm – 4.6756 x age in years.
    if (chooseGender) {
      if (a === 0 && b === 0 && c === 0) {
        alert('Attenzione! non hai compilato alcuni/tutti i campi')
      } else {
        let result1 = Math.floor(655.0955 + (9.5634 * b) + (1.8496 * a) - (4.6756 * c));
        handleIMC(a, b);
        console.log(result1, a, b, c);
        resetFields();
      }

    } else {
      if (a === 0 && b === 0 && c === 0) {
        alert('Attenzione! non hai compilato alcuni/tutti i campi')
      } else {
        let result2 = Math.floor(66.4730 + (13.7516 * b) + (5.0033 * a) - (6.7550 * c));
        handleIMC(a, b);
        console.log(result2, a, b, c);
        resetFields();
      }
    }
  }

  const handleIMC = (a: number, b: number) => {
    let height = a / 100;
    let imc = ((b) / (height * height)).toFixed(2);
    console.log(imc)
  }

  const resetFields = () => {
    setField1(0)
    setField2(0)
    setField3(0)
  }

  const inputsSelection = [
    { id: 1, label: 'Height', variant: 'outlined', type: 'number', value: field1, onChange: (e: any) => setField1(Number(e.target.value)) },
    { id: 2, label: 'Weight', variant: 'outlined', type: 'number', value: field2, onChange: (e: any) => setField2(Number(e.target.value)) },
    { id: 3, label: 'Age', variant: 'outlined', type: 'number', value: field3, onChange: (e: any) => setField3(Number(e.target.value)) }
  ];

  return (
    <>
      <MyContext.Provider value={{
        chooseGender,
        handleGender
      }}>
        <div>
          <div>
            <div>
              {/**Calcola il BMR per uomo o donna */}
              <div>
                <div>
                  <h1 style={{
                    color: chooseGender ? 'pink' : 'aqua'
                  }}>
                    Calcola BMR {chooseGender ? 'Donna' : 'Uomo'}
                  </h1>
                </div>
                <div>
                  {
                    inputsSelection.map((el: any) => {
                      return (
                        <AppBox
                          key={el.id}
                          variant={el.variant}
                          label={el.label}
                          type={el.type}
                          value={el.value}
                          onChange={el.onChange}
                        />
                      )
                    })
                  }
                </div>
                <div>
                  {!chooseGender && <CalcMan textBtn='Donna' />}
                  {chooseGender && <CalcWoman textBtn='Uomo' />}
                  <button type="button" onClick={() => HandleBmr(field1, field2, field3)}>BMR</button>
                </div>
              </div>
            </div>
            {/**Qui calcola la massa grassa */}
          </div>
        </div>
      </MyContext.Provider>
    </>
  )
}

const CalcMan = (props: MobileProps) => {
  const { chooseGender, handleGender }: any = useContext(MyContext); // Usa handleGender dal tuo contesto

  return (
    <>
      <button type="button" onClick={() => handleGender(!chooseGender)}>{props.textBtn}</button>
      {/* // Usa handleGender quando il pulsante viene cliccato */}
    </>

  )
}

const CalcWoman = (props: MobileProps) => {
  const { chooseGender, handleGender }: any = useContext(MyContext);

  return (
    <>
      <button type="button" onClick={() => handleGender(!chooseGender)}>{props.textBtn}</button>
      {/* // Usa handleGender quando il pulsante viene cliccato */}
    </>
  )
}


const AppBox = (props: TextFiledProps) => {
  const [isFocused, setIsFocused]: any = useState(false);

  return (
    <Box
      component='form'
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: 35,
        width: '100%',
      }}
    >
      <TextField
        label={props.label}
        variant={props.variant}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(false)}
        onChange={props.onChange}
        value={props.value}
        sx={{
          height: 35,
          width: '300px',
          cursor: 'pointer',
          '& .MuiOutlinedInput-root': {
            height: '100%',
            maxHeight: 35,
            '& > fieldset': {
              height: '100%',
            },
          },
          '& .MuiOutlinedInput-root:hover': {
            '& > fieldset': {
              borderColor: 'orange',
            },
          }

        }}
        InputLabelProps={{
          color: 'secondary',
          sx: {
            fontSize: 14,
            top: isFocused ? '-11px' : '0'
          },
        }}
      >
      </TextField>
    </Box>
  )
}




export default BmrApp;