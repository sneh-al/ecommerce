import { Image } from '@nextui-org/react';


function Logo({image}) {
  return (

<Image
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width} />
  );
}

export default Logo;
