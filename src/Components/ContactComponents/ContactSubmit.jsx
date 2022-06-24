import React, { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { init, send } from 'emailjs-com';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

const theme = createTheme({
    palette: {
      primary: {
        main: '#99FFC2'
      },
      text:{
        main: '#767676'
      }
    },
  });

export default function ContactSubmitButton(props) {
  const { senderMail, senderName, senderComment } = props;
  const [ loading, setLoading ] = useState(false);
  const [ elLoading, setElLoading ] = useState(false);
  const [ submitText, setSubmitText] = useState('Send');
  const [ alert, setAlert ] = useState({
    open: false,
    alertType: '',
    alertMessage: '',
  });

  const sendMail = () => {
    const userID = "4cnDOmionBiT01_t2";
    const serviceID = "portfolio_mail";
    const templateID = "template_3ofd47s";

    if (userID !== undefined && serviceID !== undefined && templateID !== undefined) {
      init(userID);
  
      const template_param = {
          from_name: senderName,
          from_mail: senderMail,
          message: senderComment
      };

      const disableSend = senderMail === '' || senderName === '' || senderComment === '';
      if (disableSend == false){
        setSubmitText('');
        setLoading(true)
        send(serviceID, templateID, template_param).then(() => {
          setLoading(false)
          setSubmitText('SEND');
          setElLoading(true)
          setAlert({...alert, open: true, alertType: 'success', alertMessage: 'Successfully sending your mail!'})
          setTimeout(() => {
            setAlert({...alert, open: false, alertType: '', alertMessage: ''})
            setElLoading(false)
          }, 3000);
        });
      } else{
        setElLoading(true)
        setAlert({...alert, open: true, alertType: 'error', alertMessage: 'Error sending your mail!'})
        setTimeout(() => {
          setAlert({...alert, open: false, alertType: '', alertMessage: ''})
          setElLoading(false)
        }, 3000);
      }
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    sendMail();
  };
  return (
    <>
      <Stack direction="row" spacing={2} sx={{ ml:'20%', mb: '5%'}}>
        <ThemeProvider theme={theme}>
          <LoadingButton disabled={elLoading} loading={loading} variant="contained" endIcon={<SendIcon />} sx={{ ml:'25%', width:'25%', height:'6vh', fontSize:'20px', color:'#767676' }} color="primary" size="large"  onClick={handleClick}>
            <Typography color='text.main'>{ submitText }</Typography>
          </LoadingButton>
        </ThemeProvider>
      </Stack>
      <Collapse sx={{mb:"3%"}} in={alert.open} >
       <Alert severity={ alert.alertType }>{ alert.alertMessage }</Alert>
      </Collapse>
    </>
  );
}
