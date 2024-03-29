const MainContent = ({ header = '標題', content = '內容', auto = 'true' }) => {
  return (
    <div className={auto === 'true' ? 'h-screen' : ''}>
      <div className='bg-gradient-to-r from-slate-300 to-stone-300'>
        <div className='xl:max-w-7xl xl:mx-auto mx-4 flex flex-row h-20'>
          <h1 className='my-auto text-4xl font-serif text-gray-600 font-semibold tracking-wider'>
            {header}
          </h1>
        </div>
      </div>
      <div className='xl:max-w-7xl xl:mx-auto mx-4 mt-12'>
        {content}
      </div>
    </div>
  );
};

export default MainContent;