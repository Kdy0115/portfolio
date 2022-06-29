import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ContactSubmitButton from './ContactSubmit';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: '#84E1AA'
      },
      text:{
        main: '#5F5F5F'
      }
    },
  });

export default function ContactForm() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');


    return (
        <Box sx={{ "@media screen and (min-width:520px)" : {mt:'3%'},  "@media screen and (max-width:520px)" : {mt:'7%'} }}>
            <ThemeProvider theme={theme}>
                <FormControl sx={{ "@media screen and (min-width:520px)" : {ml:'20%', width:'60%'},
                                   "@media screen and (max-width:520px)" : {ml:'10%', width:'80%'},
                 }}>
                        <TextField sx={{ "@media screen and (min-width:520px)" : {mb:'5%'}, "@media screen and (max-width:520px)" : {mb:'10%'}}} id="outlined-basic user-mail" label="Your Mail" variant="outlined" value={mail} onChange={(e) => setMail(e.target.value)} required/>
                        <TextField sx={{ "@media screen and (min-width:520px)" : {mb:'5%'}, "@media screen and (max-width:520px)" : {mb:'10%'}}} id="outlined-basic user-name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required/>
                        <TextField sx={{ "@media screen and (min-width:520px)" : {mb:'5%'}, "@media screen and (max-width:520px)" : {mb:'10%'}}} id="outlined-multiline-flexible contact-input" label="Comment" multiline maxRows={4} value={comment} onChange={(e) => setComment(e.target.value)} required/>
                        <ContactSubmitButton senderMail={ mail } senderName={ name } senderComment={ comment } />
                </FormControl>
            </ThemeProvider>
        </Box>
    );
  }