import { Theme } from "@emotion/react";
import { Button, Stack, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

interface MyGeneralSubmit {
    sx?: SxProps<Theme>;
    children: ReactNode;
  }

export const SubmitGeneral = ({ sx, children, ...other }: MyGeneralSubmit) => {

    return (
        <Stack spacing={0.5}>
            <Button
                variant='contained'
                type='submit'
                sx={sx}
                {...other}
            >
                {children}
            </Button>
        </Stack>
    )
}