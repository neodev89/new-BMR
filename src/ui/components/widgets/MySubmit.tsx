import { Theme } from '@emotion/react';
import { Button, darken, SxProps } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import React, { FC } from 'react';

interface SubmitProps {
  sx?: SxProps<Theme>;
  onClick: () => void;
  children: string;
  gender: 'M' | 'F';
}

export const MySubmit: FC<SubmitProps> = ({ sx, onClick, children, gender }: SubmitProps) => {
  const color = gender === 'M' ? blue[800] : pink[300];

  return (
    <Button 
      sx={{ 
        ...sx, 
        backgroundColor: color, // Il colore di sfondo cambia in base al genere
        '&:hover': {
          backgroundColor: darken(color, 0.2), // Il colore di sfondo al passaggio del mouse diventa più scuro
        },
      }} 
      size="small" 
      variant="contained" 
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
