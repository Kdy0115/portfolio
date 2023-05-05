import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import CareerItem from './carrerItem';

const Career = () => {
  return (
    <React.Fragment>
      <Box width="100%" mt="8%" color="white">
        <VStack spacing={6} align="stretch">
          <CareerItem
            name="2016〜2020年　国立大学法人 九州工業大学 卒業"
            description="情報工学部知能情報工学科卒業。専攻はコンピュータサイエンス/人工知能。"
          />
          <CareerItem
            name="2018年〜2021年　株式会社パイプドビッツ"
            description="在学中に新規事業企画、開発業務のサポートを行う。SPIRALという商品を活用したアプリケーションにPHP、JSを使った組み込み開発"
          />
          <CareerItem
            name="2019年〜2021年　株式会社LabBase（旧株式会社POL）"
            description="在学中にtoC向けマーケティング業務のサポート。途中から部署が変わり、toB向けの採用コンサルティング業務として、企画、データ分析等を行う。"
          />
          <CareerItem
            name="2020年〜2022年　国立大学法人 九州工業大学大学院 修了"
            description="情報創成工学専攻を修了。AI/クラウドやシステム設計などが専門。研究分野は、強化学習を用いた室内温度シミュレーションの開発をメーカーと共同開発で実施。温度シミュレータをPythonを用いてフルスクラッチで開発。"
          />
          <CareerItem
            name="2022年〜現在　ソフトバンク株式会社"
            description="Fintech事業におけるPayment開発を実施。フロント〜バックエンド〜インフラまで幅広く携わる。部署兼務で、社内のセキュリティ向上のための新規プロジェクトの立ち上げを行う。"
          />
          <CareerItem
            name="2023年〜現在　808合同会社"
            description="セキュリティに関するコンサルティング業務のサポートの実施。ISMS認証のためのセキュリティルールメイキングや社内ルールの見直し等の実施。"
          />
          <CareerItem
            name="2023年〜現在　株式会社コテラス"
            description="サービス開発に従事。マッチングアルゴリズムの開発やサービスのUI/UXの検討、プロダクトや技術に関する全般を担当。"
          />
        </VStack>
      </Box>
    </React.Fragment>
  );
};

export default Career;
