import React, { useState, useEffect, useReducer, useContext, createContext } from 'react';
import myStyle from './Appstyle.module.css';
import { Skeleton, Stack, Box, Typography } from '@mui/material';

import StackLeft from './ui/components/pages/StackLeft';
import StackRight from './ui/components/pages/StackRight';
import { useStyle } from './ui/styles/useSxStyle';

// const MyContext = useContext({});



function App() {
    const sx = useStyle();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Stack spacing={1} className={myStyle.app}>
            <Box className={myStyle.central}>
                <StackLeft sx={sx.table} />
                <StackRight sx={sx.table} />
            </Box>
        </Stack>

    );
}

export default App;