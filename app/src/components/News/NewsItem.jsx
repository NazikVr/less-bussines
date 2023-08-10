import { Link } from 'react-router-dom';
import NewsImage from './NewsImage';

const NewsItem = ({id, path, time, title }) => {
  return (
      <Link to={`/news/${id}`}>
        <NewsImage path={path} height={245}/>
        <p className="news-time">{time}</p>
       <h2 className='news-title'>{title}</h2>
    </Link>
  )
}

export default NewsItem