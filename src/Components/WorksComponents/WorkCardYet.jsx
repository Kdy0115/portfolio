import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import pic from "../../images/it_system_staff_main.png";
import pic from "../../images/work_yet.png";
import MediaQuery from "react-responsive";



export default function WorkCardYet() {
  return (
    <>
      <MediaQuery query="(min-width: 520px)">
        <Card sx={{ maxWidth: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={pic}
              alt="comming soon"
            />
            <CardContent>
              <Typography gutterBottom component="div">
                Comming Soon...
              </Typography>
              <Typography variant="body3" color="text.secondary">
                制作物ができ次第、ここにアップしていきます。
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </MediaQuery>
      <MediaQuery query="(max-width: 520px)">
      <Card sx={{ maxWidth: '80%', ml:'9%', mb:'7.5%'  }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="30%"
            image={pic}
            alt="comming soon"
          />
          <CardContent>
            <Typography gutterBottom component="div" sx={{ fontSize:'14px'}}>
              Comming Soon...
            </Typography>
            <Typography variant="body3" color="text.secondary">
              制作物ができ次第、ここにアップしていきます。
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </MediaQuery>    
  </>
  );
}
