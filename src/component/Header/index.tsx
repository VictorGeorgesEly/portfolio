import React, { FunctionComponent } from "react";
import {
  Box,
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

interface NameHeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  website?: string;
}

interface SummaryHeaderProps {
  summary: string;
}

interface HeaderProps extends NameHeaderProps, SummaryHeaderProps {}

const NameHeader: FunctionComponent<NameHeaderProps> = ({
  name,
  title,
  email,
  phone,
  website,
}) => (
  <>
    <Grid container>
      <Typography variant="h4" sx={{ flexGrow: 1 }}>
        {name}
      </Typography>
      <Box>
        {website && (
          <Link
            color="white"
            underline="hover"
            href={`${website}`}
            target="_blank"
          >
            <ListItem dense>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <LanguageIcon fontSize="small" />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="secondary"
              >
                {website.replace(/^.*:\/\//i, "").replace(/\/*$/, "")}
              </Typography>
            </ListItem>
          </Link>
        )}
        <Link color="white" underline="hover" href={`mailto:${email}`}>
          <ListItem dense>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <EmailIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="subtitle2" fontWeight={700} color="secondary">
              {email}
            </Typography>
          </ListItem>
        </Link>
        <Link color="white" underline="hover" href={`tel:${phone}`}>
          <ListItem dense>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <PhoneIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="subtitle2" fontWeight={700} color="secondary">
              {phone}
            </Typography>
          </ListItem>
        </Link>
      </Box>
    </Grid>
    <hr
      style={{
        borderLeft: "none",
        borderRight: "none",
        borderTop: "2px solid #fff",
        height: "2px",
        width: "100%",
      }}
    ></hr>
    <Typography variant="subtitle1">{title}</Typography>
  </>
);

const SummaryHeader: FunctionComponent<SummaryHeaderProps> = ({ summary }) => (
  <Typography variant="caption">{summary}</Typography>
);

const Header: FunctionComponent<HeaderProps> = ({
  summary,
  ...headerProps
}) => {
  return (
    <>
      <NameHeader {...headerProps} />
      <SummaryHeader summary={summary} />
    </>
  );
};

export default Header;
