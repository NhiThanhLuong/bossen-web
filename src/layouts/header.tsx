'use client';

import { theme } from '@/theme/theme';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  SxProps,
  Toolbar,
} from '@mui/material';
import { FC } from 'react';
import { useToggle } from 'usehooks-ts';

const Header: FC = () => {
  const [isOpenMenu, setToggle] = useToggle(false);

  return (
    // <AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
    //   <Container maxWidth="xl">
    //     <Toolbar
    //       disableGutters
    //       sx={{
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //       }}
    //     >
    //       <Stack
    //         component="a"
    //         href="/"
    //         sx={{
    //           alignItems: 'center',
    //           flexDirection: 'row',
    //         }}
    //       >
    //         <Image
    //           alt="Logo"
    //           src="/logo.svg"
    //           width={60}
    //           height={0}
    //           style={{ height: 'auto' }}
    //         />
    //         {/* <Typography
    //           variant="h5"
    //           sx={{
    //             ml: 2,
    //             color: 'white',
    //             fontWeight: 700,
    //           }}
    //         >
    //           Admin Panel
    //         </Typography> */}
    //       </Stack>
    //       <Stack
    //         color="primary.main"
    //         sx={{
    //           flexDirection: 'row',
    //           gap: 2,
    //           fontWeight: 500,
    //           fontSize: 24,
    //         }}
    //       >
    //         <Typography>Giới thiệu</Typography>
    //         <Typography>Sản phẩm</Typography>
    //         <Typography>Hỏi chuyên gia</Typography>
    //         <Typography>Thư viện</Typography>
    //         <Typography>Liên hệ</Typography>
    //       </Stack>
    //       <Box>
    //         <SettingsIcon />
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    <AppBar position="fixed" sx={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            className="header__menu-icon"
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

type SxStyles = Record<'appBar' | 'toolbar' | 'paperProps' | 'list', SxProps>;

const styles: SxStyles = {
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
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
};
