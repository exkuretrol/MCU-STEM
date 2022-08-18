import MainContent from "../../components/MainContent";
import YouTube from "react-youtube";
import { useState } from "react";
import Post from "../../components/Post"

const opts = {
  width: 800,
  height: 600
};

const time_table_1 = [
  {
    header: '主辦單位致詞',
    items: [
      { title: '主持人開場介紹', hour: '0', minute: '00', second: '07' },
      { title: '林真真主任致詞', hour: '0', minute: '01', second: '29' },
      { title: '評審團介紹', hour: '0', minute: '02', second: '36' },
    ]
  },
  {
    header: '大專組決賽報告',
    items: [
      { title: '主持人介紹第一組', hour: '0', minute: '03', second: '43' },
      { title: '第一組報告', hour: '0', minute: '04', second: '11' },
      { title: '第一組評審詰問', hour: '0', minute: '25', second: '23' },
      { title: '第二組報告', hour: '0', minute: '39', second: '37' },
      { title: '第二組評審詰問', hour: '0', minute: '50', second: '50' },
      { title: '主持人介紹第三組', hour: '1', minute: '06', second: '40' },
      { title: '第三組報告', hour: '1', minute: '07', second: '14' },
      { title: '第三組評審詰問', hour: '1', minute: '16', second: '42' },
      { title: '主持人介紹第四組', hour: '1', minute: '27', second: '08' },
      { title: '第四組報告', hour: '1', minute: '27', second: '27' },
      { title: '第四組評審詰問', hour: '1', minute: '37', second: '07' },
    ]
  },
  {
    header: '成果發表 & 評審評分',
    items: [
      { title: '評審討論環節', hour: '1', minute: '46', second: '03' },
      { title: '銘傳統資系諮詢中心STEM結果分享', hour: '1', minute: '46', second: '07' },
      { title: 'STEM官方line bot介紹', hour: '1', minute: '51', second: '03' },
      { title: 'STEM體驗營研究生心得影片', hour: '1', minute: '53', second: '43' },
      { title: '成果發表會', hour: '1', minute: '58', second: '50' },
      { title: '介紹women in ai', hour: '1', minute: '59', second: '24' },
    ]
  },
  {
    header: '決賽頒獎',
    items: [
      { title: '公布比賽結果環節', hour: '2', minute: '08', second: '49' },
      { title: '楊雅惠總經理講評', hour: '2', minute: '10', second: '21' },
      { title: '林志娟教授講評', hour: '2', minute: '13', second: '39' },
      { title: '馬彌嘉教授公布結果', hour: '2', minute: '16', second: '20' },
      { title: '大合照', hour: '2', minute: '18', second: '39' },
    ]
  },
]

const time_table_2 = [
  {
    header: '主辦單位致詞',
    items: [
      { title: '主持人開場白', hour: '0', minute: '0', second: '11' },
      { title: '大家留言報到', hour: '0', minute: '0', second: '35' },
      { title: '楊雅惠總經理介紹典通以及R軟體學會', hour: '0', minute: '05', second: '08' },
      { title: 'Women in AI介紹', hour: '0', minute: '12', second: '37' },
      { title: '林真真主任介紹統計學會', hour: '0', minute: '17', second: '00' },
    ]
  },
  {
    header: '體驗課程開始',
    items: [
      { title: 'STEM計畫平台 問卷介紹', hour: '0', minute: '21', second: '29' },
      { title: '問卷分析介紹', hour: '0', minute: '26', second: '11' },
      { title: '基本統計圖表介紹', hour: '0', minute: '28', second: '08' },
      { title: '休息', hour: '0', minute: '37', second: '48' },
      { title: '交叉分析介紹', hour: '0', minute: '45', second: '30' },
      { title: '休息', hour: '0', minute: '57', second: '17' },
      { title: '差異分析介紹', hour: '1', minute: '02', second: '40' },
      { title: '休息', hour: '1', minute: '14', second: '49' },
      { title: '結構方程模式介紹', hour: '1', minute: '19', second: '53' },
      { title: '休息', hour: '1', minute: '43', second: '53' },
      { title: '高中組練習題介紹', hour: '1', minute: '59', second: '57' },

    ]
  },
  {
    header: 'TA 輔導時間',
    items: [
      { title: 'TA教學環節', hour: '2', minute: '04', second: '31' },
    ]
  },
  { header: '', items: [] }
]

const time_table_3 = [
  {
    header: '主辦單位致詞',
    items: [
      { title: '主持人開場白', hour: '0', minute: '00', second: '08' },
      { title: '大家留言報到', hour: '0', minute: '00', second: '47' },
      { title: '楊雅惠總經理介紹典通以及R軟體學會', hour: '0', minute: '07', second: '36' },
      { title: 'Women in AI介紹', hour: '0', minute: '14', second: '25' },
      { title: '林真真主任介紹統計學會', hour: '0', minute: '18', second: '50' },
    ]
  },
  {
    header: '體驗課程開始',
    items: [
      { title: 'STEM計畫平台 問卷介紹', hour: '0', minute: '20', second: '39' },
      { title: '問卷分析介紹', hour: '0', minute: '29', second: '39' },
      { title: '基本統計圖表介紹', hour: '0', minute: '36', second: '12' },
      { title: '休息', hour: '0', minute: '38', second: '58' },
      { title: '交叉分析介紹', hour: '0', minute: '43', second: '04' },
      { title: '休息', hour: '0', minute: '59', second: '04' },
      { title: '差異分析介紹', hour: '0', minute: '03', second: '30' },
      { title: '休息', hour: '1', minute: '21', second: '02' },
      { title: '結構方程模式介紹', hour: '1', minute: '25', second: '02' },
      { title: '休息', hour: '1', minute: '42', second: '34' },
      { title: '大學組練習題介紹', hour: '1', minute: '46', second: '18' },
    ]
  },
  {
    header: 'TA 輔導時間',
    items: [
      { title: 'TA教學環節', hour: '1', minute: '55', second: '42' },
    ]
  },
  { header: '', items: [] }
]



const Contest = () => {
  return (
    <MainContent header='相關競賽' auto='false' content={
      <>
        <Post header="振興經濟大調查體驗課程 - 高中組" paragraph={['']}/>
        <Player Vid='ZpUsUwO3IrA' timeTable={time_table_2} />
        <Post header="振興經濟大調查體驗課程 - 大專組" paragraph={['']}/>
        <Player Vid='ypIp9whyMAg' timeTable={time_table_3} />
        <Post header="振興經濟大調查決賽 - 大專組" paragraph={['']}/>
        <Player Vid='dOyxNmj2on4' timeTable={time_table_1} />
      </>
    } />
  );
};

const Player = ({ Vid = 'ypIp9whyMAg', timeTable = [] }) => {
  const [player, setplayer] = useState(null);

  const onReady = (event) => {
    setplayer(event.target)
  }

  const seekTo = (event) => {
    player.seekTo(parseInt(event.target.value));
  };

  return (
    <>
      <YouTube
        videoId={Vid}
        opts={opts}
        onReady={onReady}
      />
      <div className='flex flex-row mt-8'>
        {
          timeTable.map((item, index) => {
            // <>
            //   <div className='flex flex-col items-start'>
            //   </div>
            // </>

            return (
              <div className='w-full mb-4' key={index}>
                <h3 className='seek-to-header'>{item.header}</h3>
                <ul className='list-decimal list-inside'>
                  {
                    item.items.map((subitem, index) => (
                      <li className='mt-2' key={index}>
                        <button
                          onClick={seekTo}
                          value={parseInt(subitem.second) + parseInt(subitem.hour * 60 * 60) + parseInt(subitem.minute * 60)}
                          className='seek-to-btn'
                        >{subitem.title}</button>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </>
  );
};






export default Contest;