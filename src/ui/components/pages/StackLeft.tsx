import { FC, useContext } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { MyBtn } from '../widgets/MyBtn';
import { MyBox } from '../widgets/MyBox';
import { MySubmit } from '../widgets/MySubmit';

import { useStyleBox } from '../../styles/useSxStyle';
import { MyInputText } from '../widgets/MyInputText';
import { MyContext } from '../../../MyContext';

import { useHandleBmr, useResetCount } from '../functions/handleBmr';

const StackLeft: FC = () => {
    const {
        gender,
        toggleGender,
        setValue,
        count,
        setCount,
        sx,
        field1,
        setField1,
        field2,
        setField2,
        field3,
        setField3
    }: any = useContext(MyContext);
    const sx1 = useStyleBox();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const resetCount = useResetCount();
    const handleBmr = useHandleBmr({ field1, field2, field3, setCount });

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
                    <MyInputText
                        inputMode='numeric'
                        onChange={handleChange}
                        placeholder='weight in kg'
                    />
                    <MyInputText
                        inputMode='numeric'
                        onChange={handleChange}
                        placeholder='height in cm'
                    />
                    <MyInputText
                        inputMode='numeric'
                        onChange={handleChange}
                        placeholder='age in year'
                    />
                    <Typography>{count}</Typography>
                    <MySubmit
                        onClick={handleBmr}
                        params={{ field1: field1, field2: field2, field3: field3, setCount: setCount }}
                    >
                        Calcola
                    </MySubmit>
                    <Button type='button' variant='outlined' color='warning'
                        onClick={resetCount}
                        /**non funziona */
                    >
                        Cancella
                    </Button>

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
