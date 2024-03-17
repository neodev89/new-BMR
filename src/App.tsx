import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StyleBmr from './Appstyle.module.css';// stile css per i laptop
import StyleBmrMobile from './Appstyle.mobile.module.css';// stile per i dispositivi mobili
import { Box, TextField } from '@mui/material';
import { inputsSelection } from './ObjLib';

const objList: any = inputsSelection;

const MyContext = React.createContext({})

const BmrApp = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    if (window.innerWidth >= 0) {
      setWidth(window.innerWidth)
    }
    // Questo codice verrà eseguito dopo il caricamento del DOM
    // console.log('Il DOM è completamente caricato');

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth]);
  return (
    <BrowserRouter>
      {
        width > 768
          ?
          <div style={{ position: 'relative', height: '100vh', minWidth: 1000 }}>
            <Routes>
              <Route path='/' element={<PrincipalPage />} />
            </Routes>
          </div>
          :
          <div style={{ position: 'relative', height: '100vh', minWidth: 338 }}>
            <Routes>
              <Route path='/' element={<PrincipalPage mobile />} />
            </Routes>
          </div>

      }
    </BrowserRouter>
  )
}

interface MobileProps {
  mobile?: boolean;
  handleGender?: () => void;
  textBtn?: string;
  el?: any;
}

interface TextFiledProps {
  mobile?: boolean;
  className?: any;
  key: number | string;
  variant: any;
  type: string;
  label: string;
  InputProps?: any;
  children?: string;
  style?: object;
}

const PrincipalPage = (props: MobileProps) => {
  const [chooseGender, setChooseGender]: any = useState(false);
  function handleGender(): any {
    setChooseGender(!chooseGender);
  }

  const {
    app,
    principalDiv,
    couple,
    divTotal,
    divTitle,
    divBody,
    divFoot,
  } = props.mobile ? StyleBmrMobile : StyleBmr;

  return (
    <>
      <MyContext.Provider value={{
        chooseGender,
        handleGender
      }}>
        <div className={app}>
          <div className={principalDiv}>
            <div className={couple}>
              {/**Calcola il BMR per uomo o donna */}
              <div className={divTotal}>
                <div className={divTitle}>
                  <h1 style={{
                    fontSize: props.mobile ? '16px' : '22px',
                  }}>
                    Calcola BMR
                  </h1>
                </div>
                <div className={divBody}>
                  {
                    objList.map((el: any) => {
                      return (
                        <AppBox 
                          key={el.id}
                          variant={el.variant}
                          label={el.label}
                          type={el.type}
                        />
                      )
                    })
                  }
                </div>
                <div className={divFoot}>
                  {!chooseGender && <CalcMan textBtn='Donna'/>}
                  {chooseGender && <CalcWoman textBtn='Uomo'/>}
                </div>
              </div>
            </div>
            <div className={couple}>
              {/**Qui calcola la massa grassa */}
            </div>
          </div>
        </div>
      </MyContext.Provider>
    </>
  )
}

const CalcMan = (props: MobileProps) => {
  const { chooseGender, handleGender }: any = useContext(MyContext); // Usa handleGender dal tuo contesto
  const { btn }: any = props.mobile ? StyleBmrMobile : StyleBmr;

  return (
    <>
      <button className={btn} type="button" onClick={() => handleGender(!chooseGender)}>{props.textBtn}</button>
      {/* // Usa handleGender quando il pulsante viene cliccato */}
    </>

  )
}

const CalcWoman = (props: MobileProps) => {
  const { chooseGender, handleGender }: any = useContext(MyContext);
  const { btn }: any = props.mobile ? StyleBmrMobile : StyleBmr

  return (
    <>
      <button className={btn} type="button" onClick={() => handleGender(!chooseGender)}>{props.textBtn}</button>
      {/* // Usa handleGender quando il pulsante viene cliccato */}
    </>
  )
}


const AppBox = (props: TextFiledProps) => {
  const [isFocused, setIsFocused] : any = useState(false);

  return (
      <Box
      component='form'
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          height: 35,
          width: '100%',
          maxWidth: props.mobile ? '150px' : '200px',
        }}  
      >
        <TextField
          label={props.label}
          variant={props.variant}
          onFocus={() => setIsFocused(!isFocused)}
          onBlur={() => setIsFocused(false)}
          sx={{
            height: '27px',
            width: '100%',
            cursor: 'pointer',
            '& .MuiOutlinedInput-root': {
              height: '100%',
              maxHeight: 35,
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
              top: isFocused ? 0 : '-11px'
            },
          }}
        >
        </TextField>
      </Box>
  )
}

const ErrorPage = () => {

  return (
    <div>
      <h1>Pagina di errore</h1>
    </div>
  )
}

export default BmrApp;