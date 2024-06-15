import React, { useState } from 'react';
import myStyle from './Appstyle.module.css';
import { Stack, Box } from '@mui/material';

import StackLeft from './ui/components/pages/StackLeft';
import StackRight from './ui/components/pages/StackRight';
import { useStyle } from './ui/styles/useSxStyle';
import { MyContext } from './MyContext';

import BMR_img from './ui/images/BMR_img.svg';

export type Gender = 'M' | 'F'

// const genders = [
//     { value: 'M', label: 'M' },
//     { value: 'F', label: 'F' },
//   ]



function App() {
  const [gender, setGender] = useState<Gender>('F');
  const [count, setCount] = useState<string>('');
  const [countImc, setCountImc] = useState<string>('');
  const [field1, setField1] = useState<string>('');
  const [field2, setField2] = useState<string>('');
  const [field3, setField3] = useState<string>('');
  const [field4, setField4] = useState<string>('');
  const [field5, setField5] = useState<string>('');
  const [field6, setField6] = useState<string>('');
  const [field7, setField7] = useState<string>('');

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  
  const sx = useStyle();

  function toggleGender() {
    if (gender === 'F') {
      setGender('M');
      setIsDisabled(true);
    } else {
      setGender('F')
      setIsDisabled(false);
    }
  }


    return (
      // Utilizzo del Context in un Provider
      <MyContext.Provider value={{
        gender,
        toggleGender,
        count,
        setCount,
        sx,
        field1,
        setField1,
        field2,
        setField2,
        field3,
        setField3,
        field4,
        setField4,
        field5,
        setField5,
        field6,
        setField6,
        field7,
        setField7,
        isDisabled,
        setIsDisabled,
        countImc,
        setCountImc,
      }}>
        <Stack spacing={1} className={myStyle.app}
          style={{
            backgroundImage: `url(${BMR_img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 25%',
            filter: 'drop-shadow(5px 5px 5px black)',
          }}>
          <Box className={myStyle.central}>
            <StackLeft />
            <StackRight />
          </Box>

        </Stack>
      </MyContext.Provider>
    );
  }

  export default App;
