'use client';

import { theme } from '@/theme/theme';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  AppBarProps,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  SxProps,
  Toolbar,
  styled,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { useToggle } from 'usehooks-ts';

const Header: FC = () => {
  const [isOpenMenu, setToggle] = useToggle(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  console.log(isDesktop);

  return (
    // <Toolbar
    //   disableGutters
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //   }}
    // >
    //   <Stack
    //     component="a"
    //     href="/"
    //     sx={{
    //       alignItems: 'center',
    //       flexDirection: 'row',
    //     }}
    //   >
    //     <Image
    //       alt="Logo"
    //       src="/logo.svg"
    //       width={60}
    //       height={0}
    //       style={{ height: 'auto' }}
    //     />
    //     {/* <Typography
    //       variant="h5"
    //       sx={{
    //         ml: 2,
    //         color: 'white',
    //         fontWeight: 700,
    //       }}
    //     >
    //       Admin Panel
    //     </Typography> */}
    //   </Stack>
    //   <Stack
    //     color="primary.main"
    //     sx={{
    //       flexDirection: 'row',
    //       gap: 2,
    //       fontWeight: 500,
    //       fontSize: 24,
    //     }}
    //   >
    //     <Typography>Giới thiệu</Typography>
    //     <Typography>Sản phẩm</Typography>
    //     <Typography>Hỏi chuyên gia</Typography>
    //     <Typography>Thư viện</Typography>
    //     <Typography>Liên hệ</Typography>
    //   </Stack>
    //   <Box>
    //     <SettingsInputComponent />
    //   </Box>
    // </Toolbar>

    <AppBarStyle position="fixed" is_desktop={isDesktop ? 'true' : undefined}>
      <Container maxWidth="2xl">
        <Toolbar disableGutters sx={styles.mobileToolbar}>
          <IconButton
            edge="start"
            size="large"
            aria-label="menu"
            onClick={setToggle}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            disableBackdropTransition
            disableDiscovery
            open={isOpenMenu}
            onClose={setToggle}
            onOpen={setToggle}
            PaperProps={{
              sx: styles.paperProps,
            }}
          >
            {/* <Paper> */}
            <List disablePadding sx={styles.list}>
              <ListItem
                disablePadding
                divider
                // button
                // component={Link}
                // to="/"
                // onClick={() => setOpenDrawer(false)}
              >
                <ListItemText disableTypography>Trang chủ</ListItemText>
              </ListItem>

              <ListItem
                disablePadding
                divider
                // button
                // component={Link}
                // to="/"
                // onClick={() => setOpenDrawer(false)}
              >
                <ListItemText disableTypography>Trang chủ</ListItemText>
              </ListItem>

              <ListItem
                disablePadding
                divider
                // button
                // component={Link}
                // to="/"
                // onClick={() => setOpenDrawer(false)}
              >
                <ListItemText disableTypography>Trang chủ</ListItemText>
              </ListItem>
            </List>
            {/* </Paper> */}
          </SwipeableDrawer>
          <Image alt="Logo" src="/logo.svg" width={60} height={0} />
          <IconButton edge="start" size="large" aria-label="search">
            <SearchIcon
              sx={{
                color: 'white',
              }}
            />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBarStyle>
  );
};

export default Header;

type SxStyles = Record<
  'toolbar' | 'paperProps' | 'list' | 'mobileToolbar',
  SxProps
>;

const styles: SxStyles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  paperProps: {
    height: 'auto',
    width: 200,
  },
  list: {
    '.MuiListItem-root': {
      paddingLeft: theme.typography.pxToRem(16),
      '.MuiListItemText-root': {
        color: theme.palette.primary.main,
      },
    },
  },
  mobileToolbar: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',

    img: {
      height: 'auto',
      position: 'absolute',
      left: '50%',
      bottom: 0,
      transform: 'translate(-50%, 20%)',
    },
  },
};

const AppBarStyle = styled(AppBar)<
  AppBarProps & {
    is_desktop?: 'true';
  }
>(({ theme, is_desktop }) => ({
  backgroundColor: is_desktop === 'true' ? 'white' : theme.palette.primary.main,
}));
