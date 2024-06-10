import React, { FC, useContext } from 'react';
import { MyContext } from '../../../MyContext';
import { Stack } from '@mui/material';


const StackRight: FC = () => {
    const { sx }: any = useContext(MyContext);
    return (
        <Stack spacing={1} sx={sx.table}>

        </Stack>
    )
}

export default StackRight;