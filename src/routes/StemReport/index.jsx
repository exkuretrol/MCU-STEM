import MainContent from "../../components/MainContent";

const A = {
  title: '人才培育面',
  list: [
    {
      item: '與合作企業共同推動學生參與之培育機制',
      sublist: [
        '典通公司提供 3 個實習機會給女學生，實習內容主軸為個性化行銷訴求，並精準推薦引擎產品開發與資料分析。',
        '考核面向 — 敬業精神、工作能力、學習進度與適應能力',
        '提供調查數據，作為學生實務專題的主題。',
        '台灣民眾生活品質調查資料作為實務專題的製作主題'
      ],
    }
  ]
};

const B = {
  title: '女性支持面',
  list: [
    {
      item: '協助女性教研人員投入科研與研究之友善環境及支持系統，至產業深造學習機會。',
      sublist: [
        '於 111 年 5 月 21 日舉辦企業高中大學生論壇（方式：YouTube 直播）。',
        'Young Women in AI Taiwan 志工團隊已於 111 年 2 月成立，成員目前共有五位。於 111 年 4 月 19 日開始社交媒體 IG 第一篇貼文。']
    },
    {
      item: '協助女學生、深化 STEM 領域學習',
      sublist: [
        '延攬了 6 位女同學，擔任研究助理，負責編製雲端平台的教材，以及參與 WAI 之討論群，同時有 2 位推薦至典通公司擔任實習工作。',
        'Young WAI 成員目前有五位，3 位大學生，2 位高中生。'
      ]
    }
  ]
}

const C = {
  title: '辦理績效面',
  list: [
    {
      item: '平台的創新研發（發表專利）',
      sublist: [
        '平台研發的專業投稿至期刊。於 111 年 2 月刊登在「智慧科技與應用統計學報」19 卷 2 期 ',
        '平台優化與系統的專利申請已提出，正在審查中。'
      ]
    },
    {
      item: '成立、Women in AI 校園社群',
      sublist: [
        '於 111 年 2 月成立 Young Women in AI 並於 4 月 19 日開始建立線上討論群。',
        '於 111 年 5 月 21 日正式辦了第一場 YouTube 線上直播活動'
      ]
    },
    {
      item: '推廣應用',
      sublist: [
        '4 場教育訓練營：(i) 學校教職員，(ii) 高中主學習課程，(iii) 大專生體驗營與 (iv) 企業教育訓練',
        '結合智慧科技學會與中華 R 軟體協會舉辦了「振興經濟大調查」競賽活動'
      ]
    },
    {
      item: '成立專業實驗室',
      sublist: [
        '銘傳統資系 S310-1 成立專業實驗室提供給本計劃使用',
        '結合統計諮詢中心辦理推館體驗營的諮詢服務'
      ]
    }
  ]
}

const D = {
  title: '整體營運面',
  list: [
    {
      item: '推動目標與實施策略。',
      sublist: [
        '【分析平台】優化流程（重新建構平台），進行了分析結果之比對',
        '舉辦了 4 場推廣活動',
        '「Young Women in AI Taiwan」志工團隊於 111 年 2 月成立'
      ]
    },
    {
      item: '解決之產業課題',
      sublist: [
        '典通公司人員預計 6 月 6 日至 6 月 10 日之間，舉辦 1 場次 20 人次 3 小時的線上教育訓練',
        '學習以結構化模型進行調查構面間的關聯解釋，以提升整體公司的研究深度。'
      ]
    }
  ]
}

const StemReport = () => {
  return (
    <MainContent header='STEM 計畫成果內容' auto='false' content={
      <div className='w-full h-full' >
        <Image />
        <Post what={A} />
        <Post what={B} />
        <Post what={C} />
        <Post what={D} />
      </div>
    } />
  );
};

const Post = ({ what }) => {
  return (
    <div className='mb-12'>
      <h1 className='font-serif text-3xl text-gray-900 mb-4 border-b border-slate-400 w-fit pb-3'>{what.title}</h1>
      <ul className='list-outside list-disc ml-4'>
        {what.list.map((item) => (
          <li className='mb-2'>
            {item.item} <br />
            <ul className='ml-4 list-outside list-decimal'>
              {item.sublist.map((subitem) => (<li>{subitem}</li>))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Image = () => (
  <img className='rounded-lg mx-auto mb-12' src='2-1.png'></img>
);



export default StemReport;