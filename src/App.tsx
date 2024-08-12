import React, { useState } from 'react';
import classStyle from './Appstyle.module.css';
import { Stack, Box } from '@mui/material';

import StackLeft from './ui/components/pages/StackLeft';
import StackRight from './ui/components/pages/StackRight';
import { useStyle } from './ui/styles/useSxStyle';
import { MyContext } from './MyContext';

import BMR_img from './ui/images/BMR_img.svg';
import { LoginPage } from './ui/components/pages/signInPage';

export type Gender = 'M' | 'F'

function App() {
  // eslint-disable-next-line
  const [sign, setSign] = useState<boolean>(false),
    [gender, setGender] = useState<Gender>('F'),
    [count, setCount] = useState<string>(''),
    [countImc, setCountImc] = useState<string>(''),
    [values, setValues] = useState<{ [key: string]: string }>({}),
    [myStyle, setMyStyle] = useState<{ [key: string]: string }>({ borderColor: 'inherit' })
    ;

  const sx = useStyle();


  return (
    // Utilizzo del Context in un Provider
    <MyContext.Provider value={{
      gender, setGender,
      count,
      setCount,
      sx,
      values,
      setValues,
      countImc,
      setCountImc,
      myStyle,
      setMyStyle,
      sign, setSign,
    }}>
      <Stack spacing={1} className={classStyle.app}
        style={{
          backgroundImage: `url(${BMR_img})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 25%',
          filter: 'drop-shadow(5px 5px 5px black)',
        }}>
        {!sign ? (<Box className={classStyle.central}>
          <StackLeft />
          <StackRight />
        </Box>) : (
          <Box className={classStyle.central}>
            <LoginPage />
          </Box>
        )}

      </Stack>
    </MyContext.Provider>
  );
}

export default App;
