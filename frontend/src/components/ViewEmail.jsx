import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { ArrowBack, Delete } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { emptyProfilePic } from "../constants/constant";
import styled from "@emotion/styled";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";

const IconWrapper = styled(Box)({
  padding: 15,
});

const Subject = styled(Typography)({
  fontSize: 22,
  margin: "10px 0 20px 75px",
  display: "flex",
});

const Indicator = styled(Box)({
  fontSize: "12px !important",
  background: "#ddd",
  color: "#222",
  borderRadius: 4,
  padding: "2px 4px",
  alignSelf: "center",
  display: "inline-block",
  marginLeft: 10,
});

const Image = styled("img")({
  borderRadius: "50%",
  width: 40,
  height: 40,
  margin: "0px 10px 0 10px",
  backgroundColor: "#cccccc",
});

const Container = styled(Box)({
  marginLeft: 15,
  width: "100%",
  "& > div": {
    display: "flex",
    "& > p > span": {
      fontSize: 12,
      color: "#5E5E5E",
    },
  },
});

const Date = styled(Typography)({
  margin: "0 50px 0 auto",
  fontSize: 12,
  color: "#5E5E5E",
});

const ViewEmail = () => {
  const { sidebarIsOpen } = useContext(DataContext);
  const { state } = useLocation();
  const { email } = state;
  const moveEmailToservice = useApi(API_URLS.moveEmailsToBin);

  const deleteEmail = () => {
    moveEmailToservice.call([email._id]);
    window.history.back();
  };

  return (
    <Box
      style={
        sidebarIsOpen
          ? {
              marginLeft: 250,
            }
          : {
              width: "100%",
            }
      }
    >
      <IconWrapper>
        <ArrowBack onClick={() => window.history.back()} color="action" />
        <Delete
          fontSize="small"
          color="action"
          onClick={() => deleteEmail()}
          style={{ marginLeft: 20 }}
        />
      </IconWrapper>
      <Subject>
        {email?.subject}
        <Indicator component="span">Inbox</Indicator>
      </Subject>
      <Box style={{ display: "flex" }}>
        <Image src={emptyProfilePic} alt="profile" />
        <Container>
          <Box>
            <Typography>
              {email.name}
              <Typography component="span">
                &nbsp;
                {"<"}
                {email.to}
                {">"}
              </Typography>
            </Typography>

            <Date>
              {new window.Date(email?.date).getDate()}
              {new window.Date(email?.date).toLocaleString("default", {
                month: "long",
              })}{" "}
              &nbsp;
              {new window.Date(email?.date).getFullYear()}
            </Date>
          </Box>
          <Typography style={{ marginTop: 20 }}>{email.body}</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ViewEmail;
