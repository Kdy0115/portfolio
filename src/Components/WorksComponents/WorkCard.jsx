import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pic from "../../images/system_concept.png";
import Modal from '@mui/material/Modal';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import MediaQuery from "react-responsive";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// const style1 = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '80%',
//   height: '80%',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };




export default function WorkCard(props) {
  const { title, description } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MediaQuery query="(min-width: 520px)">
        <Card sx={{ maxWidth: '100%', mb:'7.5%' }} onClick={handleOpen}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="30%"
              image={pic}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom component="div">
                { title }
              </Typography>
              <Typography variant="body3" color="text.secondary">
                { description }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </MediaQuery>    
      <MediaQuery query="(max-width: 520px)">
        <Card sx={{ maxWidth: '80%', ml:'9%', mb:'7.5%' }} onClick={handleOpen}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="30%"
              image={pic}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom component="div" sx={{ fontSize:'14px' }}>
                { title }
              </Typography>
              <Typography variant="body3" color="text.secondary">
                { description }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </MediaQuery>

      <MediaQuery query="(min-width: 520px)">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="50%"
              image={pic}
            />
            <CardContent>
            <Typography gutterBottom component="div" sx={{ fontSize:'24px', color:'#767676'}}>
              <strong>{title}</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              大学院時代に、研究で開発した空調動作時の温度状況を予測する温度シミュレータです。
              システムの裏側では、強化学習技術の一つであるエージェントシミュレーションを用いています。
              限られたデータだけでシミュレーションをするために、熱伝播を簡易な式でモデリングし実装しました。
              言語はpythonとHTML/CSSとJSを利用しています。詳細はgithubと論文を参照してください。
            </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {window.location.href = "https://github.com/Kdy0115/ThermalAgentSimulator"}}>Github</Button>
              <Button size="small" onClick={() => {window.location.href = "https://link.springer.com/chapter/10.1007/978-3-030-75100-5_37"}}>Thesis</Button>
            </CardActions>
            </Card>
        </Modal>
      </MediaQuery>  
      <MediaQuery query="(max-width: 520px)">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="30%"
              image={pic}
            />
            <CardContent>
            <Typography gutterBottom component="div" sx={{ fontSize:'12px', color:'#767676'}}> 
              <strong>{title}</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              大学院時代に、研究で開発した空調動作時の温度状況を予測する温度シミュレータです。
              システムの裏側では、強化学習技術の一つであるエージェントシミュレーションを用いています。
              限られたデータだけでシミュレーションをするために、熱伝播を簡易な式でモデリングし実装しました。
              言語はpythonとHTML/CSSとJSを利用しています。詳細はgithubと論文を参照してください。
            </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {window.location.href = "https://github.com/Kdy0115/ThermalAgentSimulator"}}>Github</Button>
              <Button size="small" onClick={() => {window.location.href = "https://link.springer.com/chapter/10.1007/978-3-030-75100-5_37"}}>Thesis</Button>
            </CardActions>
            </Card>
        </Modal>
      </MediaQuery>        
    </>
  );
}
