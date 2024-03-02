import { LazyLoadImage } from 'react-lazy-load-image-component';


function Logo({image}) {
  return (

<LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width} />
  );
}

export default Logo;
