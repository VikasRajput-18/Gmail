import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { Box, Checkbox, List, ListItem } from "@mui/material";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Email from "./Email";
import NoMails from "./common/NoMails";
import { EMPTY_TABS } from "../constants/constant";

const Emails = () => {
  const { sidebarIsOpen } = useContext(DataContext);
  const { type } = useParams();

  const [refreshScreen, setRefreshScreen] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState([]);

  const getEmailService = useApi(API_URLS.getEmailFromTypes);
  const moveEmailToservice = useApi(API_URLS.moveEmailsToBin);
  const deleteEmailService = useApi(API_URLS.deleteEmail);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type, refreshScreen]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = () => {
    if (type === "bin") {
      deleteEmailService.call(selectedEmails);
    } else {
      moveEmailToservice.call(selectedEmails);
    }
    setRefreshScreen((prev) => !prev);
  };

  return (
    <Box
      style={
        sidebarIsOpen
          ? {
              marginLeft: 250,
            }
          : {
              width: "calc(100% - 250px)",
            }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size={"small"} onChange={(e) => selectAllEmails(e)} />
        <DeleteOutlineIcon
          style={{ cursor: "pointer" }}
          onClick={(e) => deleteSelectedEmails(e)}
        />
      </Box>

      <List>
        {getEmailService?.response?.map((email) => {
          return (
            <Email
              key={email._id}
              email={email}
              selectedEmails={selectedEmails}
              setRefreshScreen={setRefreshScreen}
              setSelectedEmails={setSelectedEmails}
            />
          );
        })}
        {getEmailService?.response?.length === 0 && (
          <NoMails message={EMPTY_TABS[type]} />
        )}
      </List>
    </Box>
  );
};

export default Emails;
