import MainContent from "../../components/MainContent";
import Post from "../../components/Post";

const WAI = ['「Women in AI Taiwan」社群，源自法國「Women in AI」的社群成員，舉辦女性從事科研人員之 跨領域講座、企業論壇'];
const YWAI = ['Young Women in AI Taiwan 志工團隊己於111年 2月成立,成員目前有來自台師大及銘傳大學同學三位、兩位高中生(一個北一女、另一位為高雄女中) , 共五位。已於 111年 4月19日開始社交媒體IG第一篇貼文, 至目前 ( 111年5月27日) 己有7篇限動、13篇貼文、83位 追蹤者。IG 帳號為: wai_taiwan_young']

const About = () => {
  return (
    <MainContent header='關於我們' auto='false' content={
      <div className='grid grid-cols-3'>
        <div className='col-span-2 pr-8'>
          <Post header='Women in AI Taiwan 社群簡介' paragraph={WAI} />
          <Post header='Young Women in AI Taiwan 社群簡介' paragraph={YWAI} />

          <h1 className='font-serif text-3xl text-gray-900 mb-4 border-b border-slate-400 w-fit pb-3'>聯絡我們</h1>
          <ContactForm />
        </div>
        <div className='pl-8'>
          <h3 className='text-lg font-semibold mb-4'>聯絡資訊</h3>
          <span></span>
          <p className='mb-2'>
            台灣智慧科技與應用統計學會<br />
            (03) 350-7001#3251<br />
            林怡君 執行秘書
          </p>
          <h3 className='text-lg font-semibold mb-4'>地址</h3>
          <p className='mb-2'>奇美大樓 <br />100台北市中正區中華路一段</p>
          <iframe className="rounded-lg" width="50%" height="360px" frameBorder="0" src="https://maps.google.com.tw/maps?f=q&amp;z=15&amp;output=embed&amp;q=25.0373206,121.5077808" allowFullScreen=""></iframe>
        </div>
      </div>
    } />
  );
};

const ContactForm = () => {
  const handleSubmitForm = async e => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    let mail = {
      to: email.value,
      subject: "聯絡我們通知信",
      text: `您好，我們已經收到您的訊息，以下為您填寫的資料，我們將會有專員儘速和您聯絡！\n
      姓名: ${name.value}!\n
      Email: ${email.value}\n
      訊息內容: ${message.value}`,
      html: `您好，我們已經收到您的訊息，以下為您填寫的資料，我們將會有專員儘速和您聯絡！<br>
      姓名: ${name.value}!<br>
      Email: ${email.value}<br>
      訊息內容: ${message.value}`
    }
    let response = await fetch("./.netlify/functions/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(mail)
    })
    alert(response.json());
  }
  return (
    <>
      <form className="w-full max-w-lg mb-8" onSubmit={handleSubmitForm}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              姓名
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              電子信箱
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              訊息
            </label>
            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              送出
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </>
  )
}

export default About;