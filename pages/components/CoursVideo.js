const CoursVideo = ({ src }) => {
  return (
    <div className='mt-8'>
      <video autoPlay loop style={{ width: 'auto', height: 'auto' }}>
        <source src={`/${src}`} />
      </video>
    </div>
  )
}

export default CoursVideo
