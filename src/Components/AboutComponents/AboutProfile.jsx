import pic from "../../images/it_system_staff_main.png"
import * as React from 'react';
import MediaQuery from "react-responsive";
import { Container } from "@mui/material";

export default function ProfileImageInAbout() {
  return (
    <>
      <MediaQuery query="(min-width: 520px)">
        <img src={pic} width='100%' height="100%"  alt="アイコン" />
      </MediaQuery>
      <MediaQuery query="(max-width: 520px)">
        <Container maxWidth="sm">
          <img src={pic} width='100%' height="100%"  alt="アイコン" />
        </Container>
      </MediaQuery>
    </>
  );
}
