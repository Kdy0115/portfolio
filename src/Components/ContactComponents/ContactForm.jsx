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
  const [mail, setMail] = useState(''); // 「ご氏名」の部分
  const [name, setName] = useState(''); // 「会社名」の部分
  const [comment, setComment] = useState('');

    return (
        <Box sx={{ mt:'3%' }}>
            <ThemeProvider theme={theme}>
                <FormControl sx={{ ml:'20%', width:'60%' }}>
                        <TextField sx={{ mb:'5%' }} id="outlined-basic user-mail" label="Your Mail" variant="outlined" value={mail} onChange={(e) => setMail(e.target.value)} required/>
                        <TextField sx={{ mb:'5%' }} id="outlined-basic user-name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required/>
                        <TextField id="outlined-multiline-flexible" label="Comment" multiline maxRows={4} sx={{ mb:'5%' }} value={comment} onChange={(e) => setComment(e.target.value)} required/>
                        <ContactSubmitButton senderMail={ mail } senderName={ name } senderComment={ comment } />
                </FormControl>
            </ThemeProvider>
        </Box>
    );
  }