import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import MediaQuery from "react-responsive";


export default function DetailProfileInAbout() {

  return (
    <React.Fragment>
      <CssBaseline />
      <MediaQuery query="(min-width: 520px)">
        <Box sx={{ ml:'10%' }}>
            <Box sx={{ fontSize:'24px', mb:'1%', color:'#767676' }}>Details</Box>
            <Box sx={{ fontSize:'20px', width: '90%', color:'#767676', ml:'2%' }}>
                <Typography>福岡出身、東京在住のエンジニア。趣味は読書やドライブとか、最近は色々な人と会うことを楽しんでます。</Typography>
                <Typography>メインはバックエンド開発。フロントはアマチュアです。最近はアーキテクチャとか設計とかの上流側に興味あります。</Typography>
                <Typography>大学/大学院では、機械学習やシステム工学、クラウドコンピューティングなどを学ぶ。研究テーマは、エージェントシミュレーションを用いた空調制御最適化。</Typography>
                <Typography>Web系の企業でWebシステムの開発やテストなどを経験し、企業向け業務システムを開発する企業でOCRや機械学習などの開発業務に取り組む。</Typography>
                <Typography>また人材系サービスを提供するベンチャー企業で、採用コンサルティングの支援などに取り組み、インターンシップ企画やデータ分析、業務効率化なども経験。</Typography>
                <Typography>現在は大手IT/通信系の会社で、セキュリティに関する企画/開発やFintech系の開発業務に取り組む。</Typography>
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery query="(max-width: 520px)">
        <Box sx={{ height:'80vh', mt:'3%', ml:'7%' }}>
            <Box sx={{ fontSize:'18px', mb:'1%', color:'#767676' }}>Details</Box>
            <Box sx={{ width: '90%', color:'#767676', ml:'2%' }}>
                <Typography sx={{ fontSize:'12px' }}>福岡出身、東京在住のエンジニア。趣味は読書やドライブとか、最近は色々な人と会うことを楽しんでます。</Typography>
                <Typography sx={{ fontSize:'12px' }}>メインはバックエンド開発。フロントはアマチュアです。最近はアーキテクチャとか設計とかの上流側に興味あります。</Typography>
                <Typography sx={{ fontSize:'12px' }}>大学/大学院では、機械学習やシステム工学、クラウドコンピューティングなどを学ぶ。研究テーマは、エージェントシミュレーションを用いた空調制御最適化。</Typography>
                <Typography sx={{ fontSize:'12px' }}>Web系の企業でWebシステムの開発やテストなどを経験し、企業向け業務システムを開発する企業でOCRや機械学習などの開発業務に取り組む。また人材系サービスを提供するベンチャー企業で、採用コンサルティングの支援などに取り組み、インターンシップ企画やデータ分析、業務効率化なども経験。現在は大手IT/通信系の会社で、セキュリティに関する企画/開発やFintech系の開発業務に取り組む。</Typography>
            </Box>
        </Box>
      </MediaQuery>
    </React.Fragment>
  );
};