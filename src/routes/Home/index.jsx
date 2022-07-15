import { FaCalendar } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='home-bg'>
      <div className='home-cover'>
        <div className='home-title-text-wrapper'>
          <div className='home-title-text'>
            全國高中職學生暨大專學生
            <br />
            2022 振興經濟調查競賽
          </div>
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

const TimeLine = () => {
  return (
    <div className='flex flex-row space-x-32 font-serif text-gray-600'>
      <Column header='線上體驗營' items={['高中組 111.03.26', '大專組 111.03.27']} />
      <Column header='初賽' items={['111.04.15']} />
      <Column header='決賽' items={['111.05.21']} />
    </div>

  );
}

const Column = ({ header, items }) => {
  return (
    <div className='flex-col'>
      <h5 className='text-5xl border-b border-b-neutral-700 border-opacity-80 pb-4 mb-4'>{header}</h5>
      {items.map((item) => <Row item={item} />)}
    </div>
  );
};

const Row = ({ item }) => <p class='text-xl text-sans'>{item}</p>;




export default Home;
