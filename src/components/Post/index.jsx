const Post = ({ header, paragraph = [''] }) => {
  return (
    <section className='mb-12'>
      <h1 className='font-serif text-3xl text-gray-900 mb-4 border-b border-slate-400 w-fit pb-3'>{header}</h1>
      {paragraph.map((p) => <p className='text-lg text-gray-800 leading-7'>{p}</p>)}
    </section>
  )
};

export default Post;