import MainContent from "../../components/MainContent";
import Post from "../../components/Post"

const Platform = () => {
  return (
    <MainContent header='雲端策略平台' auto='false' content={
      <div className='w-full h-full'>
        <Post header='關於雲端略平台' paragraph={[
          '銘傳大學在本計畫，結合RShiny套件，設計了【調查系統】',
          '暨以結構方程模式為建模基礎的線上【即時問卷分析系統】',
          '【調查系統】以2020振興券的滿意度調查作為範例。',
          '【註】該項調查工作於2021年4月辦理'
        ]} />
        <Image src='2-2-1.png' />
        <Post header='雲端策略平台連結' paragraph={[
          '【雲端策略平台 連結網址】- http://120.125.73.101:3838/survey/AnalyzeExample/', 
          '【調查系統】以2020振興券的滿意度調查作為範例。',
          '【註】該項調查工作於2021年4月辦理']} />
          
        <Post header='範例教材連結' paragraph={[
          '【雲端策略平台 範例教材連結】 -- http://120.125.72.30:3838/apps/survey/stem110/',
          '【範例教材】以2020振興券的滿意度調查作為範例。',
          '【註】該教材是由銘傳大學統計諮詢中心成員協力完成'
        ]} />
        <Image src='2-2-3.png' />
        <Post header='Line Bot 教材連結' paragraph={[
          '【LINE Bot教材連結】手機版本的LINE Bot教材。',
          '【註】該教材是由銘傳大學統計諮詢中心成員協力完成'
        ]} />
        <Image src='2-2-33.png' />
        <Post header='雲端策略平台（可上傳）連結' paragraph={[
          '【雲端策略平台(可上傳檔案) 連結網址】- http://120.125.73.101:3838/survey/analyze/',
          '【雲端策略平台(可上傳檔案)】分析的數據檔案必須符合格式。',
          '【註】檔案格式包含2部分:問卷資訊檔 & 數據檔案'
        ]} />
        <Image src='2-2-4.png' />
      </div>
    } />
  );
};

const Image = ({ src, alt = '' }) => (
  <img className='rounded-lg mb-12' src={src} alt={alt} />
);

export default Platform;