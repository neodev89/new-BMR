import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { useStyleBox } from "../styleComponents/useStyleBox";

interface BoxProps {
    className?: string;
    children: ReactNode;
}

export const MyBox: FC<BoxProps> = ({ children }: BoxProps) => {
    const sx = useStyleBox();
    return (
        <Box component={'form'} sx={sx.myBox} action="saveBmr">
            {children}
        </Box>
    )
}