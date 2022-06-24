import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AboutCarrerModal from './AboutCarrierModal';
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 600,
  bgcolor: '#FFFFFF',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#95BFFF',
      darker: '#053e85',
    },
    secondary: {
      main: '#5F5F5F'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    text:{
      main:'#FFFFFF'
    }
  },
});

export default function ProfileButtonInAbout() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <React.Fragment>
      <CssBaseline />
        <ThemeProvider theme={theme}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button variant="contained" sx={{ width:'50%' }} size='large' onClick={handleClickOpen('paper')}><Typography color='text.main' >Career</Typography></Button>
              <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullScreen='true'
                >
                {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
                <DialogContent dividers={scroll === 'body'}>
                  <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                  >
                    <AboutCarrerModal year="2016年4月-2020年3月" content="九州工業大学 情報工学部 知能情報工学科" detail="情報科学やアルゴリズム、機械学習などの専門を学ぶ"/>                                     
                    <AboutCarrerModal 
                      year="2018年9月-2021年3月" 
                      content="株式会社パイプドビッツ　アルバイト" 
                      detail="在学中に入社。Webシステムの開発や開発業務のサポート、テストに従事
                      "/>                      
                    <AboutCarrerModal 
                      year="2019年11月-2021年9月" 
                      content="株式会社POL インターン" 
                      detail="LINEチャットボットの開発、データ分析業務、インターンシップ企画、資料作成、業務効率化に従事
                      "/>             
                    <AboutCarrerModal 
                      year="2021年11月-2022年3月" 
                      content="株式会社Info Deliver" 
                      detail="OCRや文字認識AI開発のサポート、研究開発に従事
                      "/>                                   
                    <AboutCarrerModal 
                      year="2020年4月-2022年3月" 
                      content="九州工業大学院 情報工学府 情報創成工学専攻研究科　修了" 
                      detail="空調制御最適化のためのエージェントシミュレーション開発。電機メーカーとの共同研究を行う。
                      ソフトウェア工学やプロジェクトマネジメント、アジャイル開発、クラウドコンピューティングを専門に学ぶ。
                      "/>
                    <AboutCarrerModal 
                      year="2022年4月～現在" 
                      content="ソフトバンク株式会社　入社" 
                      detail="システムエンジニアとしてジョブマッチ選考で新卒入社
                      サイバーセキュリティ部にてセキュリティ企画/開発と国際間キャリア決済システムの開発を兼務。
                      システム要件定義から設計～開発まで幅広い業務に携わる                 
                      "/>                                                                  
                  </DialogContentText>
                </DialogContent>
                <Fab color="primary" aria-label="add" sx={{ position: 'absolute', bottom:30, left:30}} onClick={handleClose}>
                  <ChevronLeftIcon sx={{ color:'#ffffff' }}/>
                </Fab>
              </Dialog>

            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" sx={{ width:'50%', ml:'-20%' }} size='large' onClick={handleOpen1} ><Typography color='text.main'>CERTIFICATION</Typography></Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open1}
                onClose={handleClose1}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open1}>
                  <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </Grid>
          </Grid>
        </ThemeProvider>
    </React.Fragment>
  );
};