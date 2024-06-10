import { Theme } from '@emotion/react';
import { Button, SxProps } from '@mui/material';
import React, { FC } from 'react';
import { BmrProps } from '../functions/handleBmr';

type MyFunctionType<T> = (args: BmrProps) => T;

interface SubmitProps {
  sx?: SxProps<Theme>;
  onClick: MyFunctionType<void>; // Generic function type for onClick
  children: string;
  params: BmrProps;
}

export const MySubmit: FC<SubmitProps> = ({ sx, onClick, children, params }: SubmitProps) => {
  return (
    <Button sx={sx} size="small" variant="outlined" onClick={() => onClick(params)}>
      {children}
    </Button>
  );
};

