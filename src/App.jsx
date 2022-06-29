import HomeContent from "./Contents/Home";
import ButtonAppBar from "./Components/Header/header";
import AboutContent from "./Contents/About";
import SkillsContent from "./Contents/Skills";
import ContactContent from "./Contents/Contact";
import WorksContent from "./Contents/Works";
// import FooterNavigation from "./Components/Footer/Footer";
import "./style.css";
import Fab from '@mui/material/Fab';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MediaQuery from "react-responsive";


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#95BFFF',
      darker: '#297ADF',
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

function App() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };  
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <ButtonAppBar />
        <MediaQuery query="(max-width: 520px)">
          <div id="home" class="page-elem-sm"><HomeContent /></div>
          <div id="about" class="page-elem-sm"><AboutContent /></div>
          <div id="skills" class="page-elem-sm"><SkillsContent /></div>
          <div id="works" class="page-elem-sm"><WorksContent /></div>
          <div id="contact" class="page-elem-sm"><ContactContent /></div>
        </MediaQuery>
        <MediaQuery query="(min-width: 521px)">
          <div id="home"><HomeContent /></div>
          <div id="about" class="page-elem"><AboutContent /></div>
          <div id="skills" class="page-elem"><SkillsContent /></div>
          <div id="works" class="page-elem"><WorksContent /></div>
          <div id="contact" class="page-elem"><ContactContent /></div>
        </MediaQuery>
        <ThemeProvider theme={theme}>
          <Fab aria-label="add" color="primary" sx={{ position: 'fixed', bottom:30, right:30, bgcolor:"transparent" }} onClick={handleTop}>
            <ExpandLessIcon sx={{ bgcolor:"transparent" }} color="text.main"/>
          </Fab>
        </ThemeProvider>
        {/* <FooterNavigation /> */}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
