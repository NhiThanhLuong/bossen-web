import { Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
  src: string;
  text: string;
};

const PetStack: FC<Props> = ({ src, text }) => {
  return (
    <StackContainer bgcolor="white" className="stack_pet">
      <Image src={src} alt="" width={200} height={200} priority />
      <Typography color="primary.main">{text}</Typography>
    </StackContainer>
  );
};

export default PetStack;

const StackContainer = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    width: '50%',
    height: 'auto',
  },

  '.MuiTypography-root': {
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(32),
    [theme.breakpoints.down('lg')]: {
      fontSize: theme.typography.pxToRem(24),
    },
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(22),
    },
  },

  [`@media (hover: hover)`]: {
    cursor: 'pointer',
    transition: 'background-color 0.5s ease',
    '&:hover': {
      backgroundColor: '#F8EBD1',
    },
  },
}));
