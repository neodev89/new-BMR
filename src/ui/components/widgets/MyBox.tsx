import { Box, SxProps, Theme } from "@mui/material";
import { ElementType, FC, ReactNode } from "react";
import { useStyleBox } from "../../styles/useSxStyle";

interface MyBoxProps {
    component: ElementType;
    action?: string;
    children: ReactNode;
    sx?: SxProps<Theme>;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
    method?: string;
}

export const MyBox: FC<MyBoxProps> = ({ children, component = 'form', onSubmit, ...other }: MyBoxProps) => {
    const sx1 = useStyleBox();
    return (
        <Box component={component} sx={sx1.myBox} onSubmit={onSubmit} {...other}>
            {children}
        </Box>
    )
}