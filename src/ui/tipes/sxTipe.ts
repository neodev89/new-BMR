import { SxProps, Theme } from '@mui/material';
import { memo } from 'react'

export const typedMemo: <T>(_: T) => T = memo

const sx = (props: SxProps<Theme>) => props;

export default sx;