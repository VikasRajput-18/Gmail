import React, { useContext } from "react";
import { AppBar, Box, InputBase, Toolbar, styled } from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";
import { DataContext } from "../Context/DataContext";

const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  background: "#eaf1f8",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 15,
  "& > svg": {
    cursor: "pointer",
  },
});

const Header = () => {
  const { setSidebarisOpen } = useContext(DataContext);

  const toggleSidebar = () => {
    setSidebarisOpen((prev) => !prev);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon
          sx={{ cursor: "pointer" }}
          color="action"
          onClick={() => toggleSidebar()}
        />
        <img
          src={gmailLogo}
          alt="logo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <SearchWrapper>
          <Search color="action" />
          <InputBase
            placeholder="Search Mail"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <Tune color="action" />
        </SearchWrapper>
        <OptionsWrapper>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
