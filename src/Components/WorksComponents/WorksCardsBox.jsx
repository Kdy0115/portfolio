import * as React from 'react';
import Box from '@mui/material/Box';
import WorkCard from './WorkCard';
import Grid from '@mui/material/Grid';
import WorkCardYet from './WorkCardYet';
import MediaQuery from "react-responsive";
import BasicPagination from './WorkPage';


export default function WorksCardsBox() {

    return (
      <React.Fragment>
        <MediaQuery query="(min-width: 520px)">
            <Box sx={{ width: '80%', ml: '10%', mt: '-2%' }}>
                <Grid container spacing={4} sx={{ mt:'2%' }}>
                    <Grid item xs={4}>
                        <WorkCard title="温熱環境エージェントシミュレータ" description="大学院時代に、研究で開発した空調動作時の温度状況を予測する温度シミュレータです。" />
                    </Grid>
                    <Grid item xs={4} >
                        <WorkCardYet />
                    </Grid>
                    <Grid item xs={4} >
                      <WorkCardYet />
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{ mt:'2%' }}>
                    <Grid item xs={4}>
                        <WorkCardYet />
                    </Grid>
                    <Grid item xs={4} >
                        <WorkCardYet />
                    </Grid>
                    <Grid item xs={4} >
                        <WorkCardYet />
                    </Grid>
                </Grid>
            </Box>
        </MediaQuery>
        <MediaQuery query="(max-width: 520px)">
            <Box sx={{ mb:'10%' }}>
                <WorkCard title="温熱環境エージェントシミュレータ" description="大学院時代に、研究で開発した空調動作時の温度状況を予測する温度シミュレータです。" />
                <WorkCardYet />
                <WorkCardYet />
            </Box>
        </MediaQuery>        
      </React.Fragment>
    );
}
