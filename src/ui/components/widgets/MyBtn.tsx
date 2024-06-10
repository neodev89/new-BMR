import { Button } from "@mui/material";
import { useStyle } from "../../styles/useSxStyle";
import { FC, ReactNode } from 'react';

interface BtnProps {
    children: ReactNode | undefined;
    onClick: () => void;
}

export const MyBtn: FC<BtnProps> = ({ children, onClick }: BtnProps) => {
    const sx = useStyle();

    return (
        <Button
            component={'button'}
            color='primary'
            size='small'
            variant='contained'
            sx={sx.btn}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}
