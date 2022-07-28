
const organizer = ['台灣智慧科技與應用統計協會', '典通公司', '中華R軟體學會', 'WOMAN in AI TAIWAN'];
const coOrganizer = ['銘傳大學金融科技學院', '教育部STEM計畫【問卷調查系統之雲端策略與統計模式化】']
const sponsor = ['教育部青年發展署', '教育部STEM計畫辦公室']

const Footer = () => {
  return (
    <footer className='footer'>
      <Column header='主辦單位' organizations={organizer} />
      <Column header='協辦單位' organizations={coOrganizer} />
      <Column header='贊助單位' organizations={sponsor} />
    </footer>
  );
};

const Column = ({ header, organizations }) => {
  return (
    <div className='footer-column'>
      <h4 className='footer-header'>{header}</h4>
      {organizations.map((organization, index) => <Row organization={organization} key={index}/>)}
    </div>
  );
};

const Row = ({ organization }) => <p className='footer-org-text'>{organization}</p>;

export default Footer;