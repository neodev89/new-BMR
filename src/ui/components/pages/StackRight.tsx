import React, { FC, useContext, useEffect } from 'react';
import { MyContext } from '../../../MyContext';
import { Box, Stack, Typography } from '@mui/material';

import { useStyle, useStyleBox } from '../../styles/useSxStyle';
import { MyBox } from '../widgets/MyBox';
// import { MyInputText } from '../widgets/MyInputText';
import { useResetFields } from '../functions/handleBmr';
import { MyBtnGenerico } from '../widgets/MyBtn';


const StackRight: FC = () => {
    const { gender, field4, setField4, field5, setField5, field6,
        setField6, field7, setField7, countImc, setCountImc,
        setDisabilita,
    }: any = useContext(MyContext);

    const sx = useStyle();
    const sx1 = useStyleBox();
    // const handleCalc = useHandleIMC();
    const resetField = useResetFields([setCountImc, setField4, setField5, setField6, setField7]);


    // const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setField4(event.target.value);
    // }
    // const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setField5(event.target.value);
    // }
    // const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setField6(event.target.value);
    // }
    // const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setField7(event.target.value);
    // }

    useEffect(() => {
        function checkFields() {
          const fields = [field4, field5, field6, field7];
          if (fields.some(field => field === '')) {
            setDisabilita(true);
          } else {
            setDisabilita(false);
          }
        }
    
        checkFields();
      }, [field4, field5, field6, field7, setDisabilita]);

    return (
        <Stack spacing={1} sx={sx.table}>
            <Stack spacing={1} sx={sx1.boxBmr}>
                <MyBox component={'div'}>
                    {gender && <Typography sx={sx1.typography} variant={'h3'}>IMC</Typography>}
                    <Typography variant={'h5'}>{countImc}</Typography>
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.corpo}>
                <MyBox component={'div'}>
                    <Stack spacing={1} sx={sx1.field}>
                        {/* <MyStyledInput
                            inputMode='numeric'
                            onChange={handleChange4}
                            placeholder='larghezza vita in cm'
                            value={field4}
                        />
                        <MyStyledInput
                            inputMode='numeric'
                            onChange={handleChange5}
                            placeholder='larghezza collo in cm'
                            value={field5}
                        />
                        <MyStyledInput
                            inputMode='numeric'
                            onChange={handleChange6}
                            placeholder='larghezza fianchi in cm'
                            value={field6}
                            disabled={isDisabled}
                        />
                        <MyStyledInput
                            inputMode='numeric'
                            onChange={handleChange7}
                            placeholder='statura in cm'
                            value={field7}
                        /> */}
                    </Stack>
                    <Box sx={sx1.fieldBtn}>

                        {/* <MySubmit gender={gender}
                            onClick={handleCalc}
                            disabled={disabilita}
                        >
                            Calcola
                        </MySubmit> */}
                        <MyBtnGenerico sx={sx.cancella}
                            onClick={resetField}>
                            Cancella
                        </MyBtnGenerico>
                    </Box>
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.boxBmr}>

            </Stack>

        </Stack>
    )
}

export default StackRight;