const UrlLink = ({ content,link }) => {
  return (
    <a className='text-pink-500' href={link}>
      {content}
    </a>
  )
}

export default UrlLink
