"use client";

import { MenuItem, MenuList } from "@mui/material";
import React, { FC } from "react";

const Navigate: FC = () => {
  return (
    <MenuList>
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </MenuList>
  );
};

export default Navigate;
