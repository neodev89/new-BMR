import { Button, darken } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import React, { FC } from 'react';

interface SubmitProps {
  onClick: () => void;
  children: string;
  gender: 'M' | 'F';
  disabled?: boolean;
}

export const MySubmit: FC<SubmitProps> = ({ onClick, children, disabled, gender }: SubmitProps) => {
  const color = gender === 'M' ? blue[800] : pink[300];

  return (
    <Button
      sx={{
        height: '30px',
        width: '100px',
        margin: '2px 0',
        color: 'white',
        backgroundColor: color, // Il colore di sfondo cambia in base al genere
        '&:hover': {
          backgroundColor: darken(color, 0.2), // Il colore di sfondo al passaggio del mouse diventa più scuro
        },
      }}
      size="small"
      variant="contained"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
