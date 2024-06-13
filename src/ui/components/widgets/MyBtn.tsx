import { Button, ButtonProps, darken, styled, SxProps, Theme } from "@mui/material";
import { blueGrey, grey, red } from "@mui/material/colors";
import { FC, ReactNode } from 'react';

interface BtnProps {
    children: string;
    onClick: () => void;
    sx?: SxProps<Theme> | undefined;
}



export const MyBtn: FC<BtnProps> = ({ sx, children, onClick }: BtnProps) => {

    return (
        <Button
            sx={{
                ...sx,
                height: '50px',
                width: '100px',
                margin: '2px 0',
                backgroundColor: grey[400],
                ':hover': {
                    backgroundColor: darken(grey[500], 0.5),
                }
            }}
            component={'button'}
            size='small'
            variant='contained'
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export const MyBtnGenerico : FC<BtnProps> = ({ sx, children, onClick }) => {
    return (
        <Button
            sx={{
                ...sx,
                height: '50px',
                width: '100px',
                margin: '2px 0',
                backgroundColor: "rgb(250, 250, 250)",
                ':hover': {
                    backgroundColor: darken(red['A700'], 0.3),
                    color: 'rgb(250, 250, 250)',
                }
            }}
            component={'button'}
            size='small'
            variant='contained'
            onClick={onClick}
        >
            {children}
        </Button>
    )
}
