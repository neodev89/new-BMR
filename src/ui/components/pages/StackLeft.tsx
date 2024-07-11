import { FC, useContext, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { MyBtn, MyBtnGenerico } from '../widgets/MyBtn';
import { MyBox } from '../widgets/MyBox';
import { MySubmit } from '../widgets/MySubmit';

import { useStyle, useStyleBox } from '../../styles/useSxStyle';
import { MyContext } from '../../../MyContext';
import { MyInputText } from '../widgets/MyInputText';

import { useHandleBmr, useResetCount } from '../functions/handleBmr';
import { Gender } from '../../../App';

interface ContextProps {
    gender: Gender;
    toggleGender: () => void;
    count: string;
    values: {[key: string]: string};
    setValues: (func: (prevValue: string[]) => {[key: string]: string}) => void;
    // field1: string;
    // field2: string;
    // field3: string;
    isDisabled: boolean;
    disabilita: boolean;
    setDisabilita: (value: boolean) => void;
    setIsDisabled: (value: boolean) => void;
}

const StackLeft: FC = () => {
    const {
        gender,
        toggleGender,
        count,
        values,
        setValues,
        // field1,
        // field2,
        // field3,
        isDisabled,
        setIsDisabled,
        disabilita,
        // setDisabilita,
    }: ContextProps = useContext(MyContext);
    const sx = useStyle();
    const sx1 = useStyleBox();

    
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
    

    const resetCount = useResetCount();
    const handleBmr = useHandleBmr();

    useEffect(() => {
        function checkFields() {
            const fields = [values['weight'], values['height'], values['age']];
            if (fields.every(field => field !== '')) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        }

        checkFields();
    }, [values, setIsDisabled]);

    return (
        <Stack spacing={1} sx={sx.table}>
            <Stack spacing={1} sx={sx1.boxBmr}>
                <MyBox component={'div'}>
                    {gender && <Typography sx={sx1.typography} variant={'h3'}>BMR {gender}</Typography>}
                    <Typography variant={'h5'}>{count}</Typography>
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.corpo}>
                <MyBox component={'form'} action={'saveBmr'}>
                    <Stack spacing={1} sx={sx1.field}>
                        <MyInputText
                            disabled={disabilita}
                            name='weight'
                            inputMode='numeric'
                            onChange={handleChanges}
                            placeholder='weight in kg'
                            value={values['weight']}
                        />
                        <MyInputText
                            disabled={disabilita}
                            name='height'
                            inputMode='numeric'
                            onChange={handleChanges}
                            placeholder='height in cm'
                            value={values['height']}
                        />
                        <MyInputText
                            disabled={disabilita}
                            name='age'
                            inputMode='numeric'
                            onChange={handleChanges}
                            placeholder='age in year'
                            value={values['age']}
                        />
                    </Stack>
                    <Box sx={sx1.fieldBtn}>
                        <MySubmit gender={gender}
                            onClick={handleBmr}
                            disabled={isDisabled}
                        >
                            Calcola
                        </MySubmit>
                        <MyBtnGenerico sx={sx.cancella}
                            onClick={resetCount}
                        >
                            Cancella
                        </MyBtnGenerico>
                    </Box>
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.boxBmr}>
                <MyBox component={'div'}>
                    {
                        gender &&
                        <MyBtn onClick={toggleGender}>
                            Seleziona il genere
                        </MyBtn>
                    }
                </MyBox>
            </Stack>
        </Stack>
    )
}

export default StackLeft;
