import React, { FC, useContext, useEffect } from 'react';
import { MyContext } from '../../../MyContext';
import { Box, Stack, Typography } from '@mui/material';

import { useStyle, useStyleBox } from '../../styles/useSxStyle';
import { MyBox } from '../widgets/MyBox';
// import { MyInputText } from '../widgets/MyInputText';
import { useResetFields } from '../functions/handleBmr';
import { MyBtnGenerico } from '../widgets/MyBtn';
import { Gender } from '../../../App';
import { MyInputText } from '../widgets/MyInputText';
import { MySubmit } from '../widgets/MySubmit';
interface StackRightContextProps {
    gender: Gender;
    count: string;
    values: { [key: string]: string };
    setValues: (func: (prevValue: string[]) => { [key: string]: string }) => void;
    isDisabled: boolean;
    disabilita: boolean;
    setDisabilita: (value: boolean) => void;
    setIsDisabled: (value: boolean) => void;
}

const StackRight: FC = () => {
    const {
        gender,
        count,
        values, setValues,
        isDisabled, setIsDisabled,
        disabilita, setDisabilita,
    }: StackRightContextProps = useContext(MyContext);


    const sx = useStyle();
    const sx1 = useStyleBox();
    // const handleCalc = useHandleIMC();
    // const resetField = useResetFields([setCountImc, setField4, setField5, setField6, setField7]);


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

    // useEffect(() => {
    //     function checkFields() {
    //       const fields = [field4, field5, field6, field7];
    //       if (fields.some(field => field === '')) {
    //         setDisabilita(true);
    //       } else {
    //         setDisabilita(false);
    //       }
    //     }

    //     checkFields();
    //   }, [field4, field5, field6, field7, setDisabilita]);

    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prevValue: string[]) => {
            let newObject: {[key: string]: string} = {};
            for (let key in prevValue) {
                newObject[key] = prevValue[key];
            }
            newObject[event.target.name] = event.target.value;
            return newObject;
        })
    }

    return (
        <Stack spacing={1} sx={sx.table}>
            <Stack spacing={0} sx={sx1.boxBmr}>
                <MyBox component={'div'}>
                    {gender && <Typography sx={sx1.typography} variant={'h3'}>IMC</Typography>}
                    <Typography variant={'h5'}>{'countImc'}</Typography>
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.corpo}>
                <MyBox component={'div'}>
                    <Stack spacing={1} sx={sx1.field}>
                        <MyInputText
                            disabled={disabilita}
                            name={'vita'}
                            inputMode='numeric'
                            onChange={handleChanges}
                            placeholder='larghezza vita in cm'
                            value={values['vita']}
                        />
                        <MyInputText
                            disabled={disabilita}
                            name={'collo'}
                            inputMode='numeric'
                            onChange={handleChanges}
                            placeholder='larghezza collo in cm'
                            value={values['collo']}
                        />
                        <MyInputText
                            disabled={disabilita}
                            name={'fianchi'}
                            inputMode='numeric'
                            onChange={handleChanges}
                            placeholder='larghezza fianchi in cm'
                            value={values['fianchi']}
                        />
                        <MyInputText
                            disabled={disabilita}
                            name={'statura'}
                            inputMode='numeric'
                            onChange={handleChanges}
                            placeholder='statura in cm'
                            value={values['statura']}
                        />
                    </Stack>
                    <Box sx={sx1.fieldBtn}>

                        <MySubmit gender={gender}
                            onClick={() => alert('scaccola')}
                            disabled={disabilita}
                        >
                            Calcola
                        </MySubmit>
                        <MyBtnGenerico sx={sx.cancella}
                            onClick={() => alert('ciao')}>
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