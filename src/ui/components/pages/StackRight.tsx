import React, { FC } from 'react';
import { Stack } from '@mui/material';

import { propertyProps } from '../../tipes/stackInterf';

const StackRight: FC<propertyProps> = ({ sx }: propertyProps) => {
    return (
        <Stack spacing={1} sx={sx}>

        </Stack>
    )
}

export default StackRight;