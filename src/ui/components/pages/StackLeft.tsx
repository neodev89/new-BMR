import React, { FC, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { MyBtn } from './MyBtn';

import { useStyleBox } from '../../styles/useSxStyle';
import { propertyProps } from '../../tipes/stackInterf';

const StackLeft: FC<propertyProps> = ({ sx }: propertyProps) => {
    const [gender, setGender] = useState("M");
    const sx1 = useStyleBox();

    const toggleGender = () => {
        setGender(prevGender => prevGender === "M" ? "F" : "M");
    };

    return (
        <Stack spacing={1} sx={sx}>
            <Stack spacing={1}>
                <Box sx={sx1.boxBmr}>
                    <Typography variant={'h3'}>BMR {gender}</Typography>
                </Box>
            </Stack>
            <Stack spacing={1}>
                {gender && <MyBtn onClick={toggleGender}>Seleziona il genere</MyBtn>}
            </Stack>
        </Stack>
    )
}

export default StackLeft;
