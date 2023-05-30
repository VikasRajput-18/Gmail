import { Box, Checkbox, ListItem, Typography } from "@mui/material";
import React from "react";
import { StarBorder, Star } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const Wrapper = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  padding: "0px 0px 0px 10px",
  background: "#f2f6fc",
  cursor: "pointer",
  "& > div": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& > p": {
      fontSize: 14,
    },
  },
});

const Indicator = styled(Typography)({
  fontSize: "12px !important",
  background: "#ddd",
  color: "#222",
  padding: "4px 10px",
  borderRadius: "4px",
  marginRight: 6,
});

const Date = styled(Typography)({
  marginLeft: "auto",
  marginRight: "20px",
  fontSize: 12,
  color: "#5f6368",
});

const Email = ({
  email,
  selectedEmails,
  setSelectedEmails,
  setRefreshScreen,
}) => {
  const navigate = useNavigate();

  const toggleStarredService = useApi(API_URLS.toggleStarredEmail);

  const toggleStarredMail = () => {
    toggleStarredService.call({ id: email._id, value: !email.starred });
    setRefreshScreen((prev) => !prev);
  };

  const onValueChange = (e) => {
    if (selectedEmails.includes(email._id)) {
      setSelectedEmails((prevState) =>
        prevState?.filter((id) => id !== email._id)
      );
    } else {
      setSelectedEmails((prevState) => [...prevState, email._id]);
    }
  };

  return (
    <Wrapper>
      <Checkbox
        size="small"
        checked={selectedEmails?.includes(email?._id)}
        onChange={() => onValueChange()}
      />
      {email.starred ? (
        <Star
          fontSize="small"
          style={{ marginRight: 10, color: "gold" }}
          onClick={() => toggleStarredMail()}
        />
      ) : (
        <StarBorder
          fontSize="small"
          style={{
            marginRight: 30,
          }}
          onClick={() => toggleStarredMail()}
        />
      )}
      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        <Typography style={{ width: 200, overflow: "hidden" }}>
          {email?.name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email?.subject}
          {email?.body && "-"}
          {email.body}
        </Typography>

        <Date>
          {new window.Date(email?.date).getDate()}
          {new window.Date(email?.date).toLocaleString("default", {
            month: "long",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
