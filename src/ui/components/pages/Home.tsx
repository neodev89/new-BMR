import { Stack, Box } from '@mui/material';
import { useState } from 'react';
import { useStyle } from '../../styles/useSxStyle';
import { MyContext } from '../../../MyContext';
import classStyle from './Appstyle.module.css';
import BMR_img from '../../../ui/images/BMR_img.svg';
import StackLeft from './StackLeft';
import StackRight from './StackRight';
import { LoginPage } from './LoginPage';

export type Gender = 'M' | 'F'

export type stateProps = {
  [key: string]: string;
}

export const Home = () => {
  // eslint-disable-next-line
  const [sign, setSign] = useState<boolean>(false),
    [gender, setGender] = useState<Gender>('F'),
    [count, setCount] = useState<string>(''),
    [countImc, setCountImc] = useState<string>(''),
    [values, setValues] = useState<stateProps>({}),
    [myStyle, setMyStyle] = useState<stateProps>({ borderColor: 'inherit' })
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
