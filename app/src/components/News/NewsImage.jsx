import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import sample from '../../img/1.png';

const NewsImage = ({path,height,styl}) => {
  
  return (
    <LazyLoadImage
       className={"img-fluid img-news-item " + styl}
       alt={'news'}
       placeholderSrc = {sample}
       effect="blur"
       height={height}
       src={path}>
    </LazyLoadImage>
  )
}

export default NewsImage