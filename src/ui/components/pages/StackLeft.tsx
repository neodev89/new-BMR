import { FC, useContext, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { MyBtn, MyBtnGenerico } from '../widgets/MyBtn';
import { MyBox } from '../widgets/MyBox';
import { MySubmit } from '../widgets/MySubmit';

import { useStyle, useStyleBox } from '../../styles/useSxStyle';
import { MyStyledInput } from '../widgets/MyStyledInput';
import { MyContext } from '../../../MyContext';

import { useHandleBmr, useResetCount } from '../functions/handleBmr';

const StackLeft: FC = () => {
    const {
        gender,
        toggleGender,
        count,
        field1,
        setField1,
        field2,
        setField2,
        field3,
        setField3,
        isDisabled,
        setIsDisabled
    }: any = useContext(MyContext);
    const sx = useStyle();
    const sx1 = useStyleBox();

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setField1(event.target.value);
    }
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setField2(event.target.value);
    }
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setField3(event.target.value);
    }


    const resetCount = useResetCount();
    const handleBmr = useHandleBmr();

    useEffect(() => {
        function checkFields() {
          const fields = [field1, field2, field3];
          if (fields.some(field => field === '')) {
            setIsDisabled(true);
          } else {
            setIsDisabled(false);
          }
        }
    
        checkFields();
      }, [field1, field2, field3, setIsDisabled]);

    return (
        <Stack spacing={1} sx={sx.table}>
            <Stack spacing={1} sx={sx1.boxBmr}>
                <MyBox>
                    {gender && <Typography sx={sx1.typography} variant={'h3'}>BMR {gender}</Typography>}
                    <Typography variant={'h5'}>{count}</Typography>
                </MyBox>
            </Stack>
            <Stack spacing={1} sx={sx1.corpo}>
                <MyBox>
                    <Stack spacing={1} sx={sx1.field}>
                        <MyStyledInput
                            inputMode='numeric'
                            onChange={handleChange1}
                            placeholder='weight in kg'
                            value={field1}
                        />
                        <MyStyledInput
                            inputMode='numeric'
                            onChange={handleChange2}
                            placeholder='height in cm'
                            value={field2}
                        />
                        <MyStyledInput
                            inputMode='numeric'
                            onChange={handleChange3}
                            placeholder='age in year'
                            value={field3}
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
                <MyBox>
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
