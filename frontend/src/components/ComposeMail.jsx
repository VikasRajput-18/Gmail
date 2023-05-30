import React, { useState } from "react";
import {
  Box,
  Dialog,
  InputBase,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Close, DeleteOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0px 0px",
};

const Header = styled(Box)({
  background: "#f2f6fc",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 16px",
  "& > p": {
    fontSize: 14,
    fontWeight: 500,
  },
});

const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 16,
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
    marginTop: 10,
  },
});

const Footer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 16px",
});

const SendButton = styled(Button)({
  background: "#0b57d0",
  color: "#fff",
  borderRadius: 30,
  width: 100,
  fontWeight: 500,
  textTransform: "none",
});

const ComposeMail = ({ handleClose, isOpen }) => {
  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const saveDraftEmails = useApi(API_URLS.saveDraftEmails);

  const [data, setData] = useState({
    recipients: "",
    subject: "",
    message: "",
  });

  const config = {
    Host: "smtp.elasticemail.com",
    Username: "vikasrajput@yopmail.com",
    Password: "990DFBABB75563F3364674BDCC10A8212DFB",
    Port: 2525,
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const closeComposeMail = (e) => {
    e.preventDefault();
    const payload = {
      to: data.recipients,
      from: "vikasvikas988099@gmail.com",
      subject: data.subject,
      body: data.message,
      date: new Date(),
      image: "",
      name: "Vikas Rajput",
      starred: false,
      type: "drafts",
    };
    saveDraftEmails.call(payload);

    if (!saveDraftEmails.error) {
      handleClose();
      setData({
        recipients: "",
        subject: "",
        message: "",
      });
    }
    handleClose();
  };
  const sendMail = () => {
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.recipients,
        From: "vikasvikas988099@gmail.com",
        Subject: data.subject,
        Body: data.message,
      }).then((message) => alert(message));
    }

    const payload = {
      to: data.recipients,
      from: "vikasvikas988099@gmail.com",
      subject: data.subject,
      body: data.message,
      date: new Date(),
      image: "",
      name: "Vikas Rajput",
      starred: false,
      type: "sent",
    };
    sentEmailService.call(payload);

    if (!sentEmailService.error) {
      handleClose();
      setData({
        recipients: "",
        subject: "",
        message: "",
      });
    }
    handleClose();
  };
  const deleteMail = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      PaperProps={{ sx: dialogStyle }}
    >
      <Header>
        <Typography>New Message</Typography>
        <Close
          onClick={closeComposeMail}
          sx={{ cursor: "pointer" }}
          fontSize="small"
          color="action"
        />
      </Header>
      <RecipientsWrapper>
        <InputBase
          name="recipients"
          value={data.recipients}
          onChange={handleChange}
          placeholder="Recipients"
        />
        <InputBase
          name="subject"
          value={data.subject}
          onChange={handleChange}
          placeholder="Subject"
        />
      </RecipientsWrapper>
      <Box sx={{ flex: 1 }}>
        <TextField
          multiline
          name="message"
          value={data.message}
          onChange={handleChange}
          style={{
            width: "100%",
            height: "100%",
          }}
          rows={20}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      </Box>
      <Footer>
        <SendButton variant="contained" onClick={sendMail}>
          Send
        </SendButton>
        <DeleteOutlined
          onClick={deleteMail}
          style={{ cursor: "pointer" }}
          color="action"
        />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
