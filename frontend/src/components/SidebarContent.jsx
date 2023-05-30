import { Box, Button, List, ListItem, styled } from "@mui/material";
import React, { useState } from "react";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../routes/routes";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  gap: 12,
});

const Container = styled(Box)({
  padding: 8,

  "& > ul": {
    padding: "10px 0px 0px 5px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    "& > a": {
      textDecoration: "none",
      color: "inherit",
    },
  },

  "& > ul > li": {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
});

const SidebarContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { type } = useParams();
  console.log(type);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <ComposeButton onClick={() => setIsOpen(true)}>
        <CreateOutlined />
        Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA?.map((data, ind) => {
          return (
            <NavLink key={ind} to={`${routes.emails.path}/${data.name}`}>
              <ListItem
                style={
                  type === data.name.toLowerCase()
                    ? {
                        background: "#d3e3fd",
                        borderRadius: "8px",
                      }
                    : {}
                }
              >
                <data.icon fontSize={"small"} style={{ marginRight : 10 }} />
                {data.title}
              </ListItem>
            </NavLink>
          );
        })}
      </List>
      <ComposeMail handleClose={handleClose} isOpen={isOpen} />
    </Container>
  );
};

export default SidebarContent;
