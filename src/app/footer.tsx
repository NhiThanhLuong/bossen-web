'use client';

import { Box, Grid, Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <Box bgcolor="myColor.main" className="w-full">
      <Box className="container py-16">
        <Box className="grid md:grid-cols-2 ">
          <Box>
            <TypographyTitle>Đường dây nóng</TypographyTitle>

            <TypographyDescription>
              Bộ phận chăm sóc khách hàng - 0816 662 266 <br />
              Kỹ thuật Thú y - Ths Nguyễn Thị Ánh Tuyết - 0918 724 625
            </TypographyDescription>
          </Box>

          <Box className="md:row-span-2">
            <TypographyTitle>
              CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI VÀ DỊCH VỤ CHĂM SÓC THÚ
              CƯNG BOSSEN
            </TypographyTitle>

            <TypographyDescription>
              Mã số doanh nghiệp: 1800155195 <br />
              Điện thoại: 0293 394 9269 <br />
              Email: info@vemedim.vn - vmd@vemedim.vn <br />
              Địa chỉ: 07 đường 30/04, Quận Ninh Kiều, Thành phố Cần Thơ. <br />
              Copyright &copy; 2023 by Vemedim. All right reserved <br />
            </TypographyDescription>
          </Box>

          <Box>
            <TypographyTitle>Mạng xã hội</TypographyTitle>

            <TypographyDescription>
              Bộ phận chăm sóc khách hàng - 0816 662 266 <br />
              Kỹ thuật Thú y - Ths Nguyễn Thị Ánh Tuyết - 0918 724 625
            </TypographyDescription>

            <Grid container>
              <Grid item xs={6}>
                Group Icon
              </Grid>

              <Grid item xs={6}>
                Da thong bao
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

const TypographyTitle = styled((props: TypographyProps) => (
  <Typography color="primary.main" {...props} />
))(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 700,
}));

const TypographyDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(10),
}));
