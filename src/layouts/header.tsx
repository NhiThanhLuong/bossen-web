'use client';

import SettingsIcon from '@mui/icons-material/Settings';
import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Stack
            component="a"
            href="/"
            sx={{
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Image
              alt=""
              src="/logo.svg"
              width={60}
              height={0}
              style={{ height: 'auto' }}
            />
            <Typography
              variant="h5"
              sx={{
                ml: 2,
                color: 'white',
                fontWeight: 700,
              }}
            >
              Admin Panel
            </Typography>
          </Stack>
          <Stack
            sx={{
              flexDirection: 'row',
              gap: 2,
            }}
          >
            <Typography>Giới thiệu</Typography>
            <Typography>Sản phẩm</Typography>
            <Typography>Hỏi chuyên gia</Typography>
            <Typography>Thư viện</Typography>
            <Typography>Liên hệ</Typography>
          </Stack>
          <Box>
            <SettingsIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
