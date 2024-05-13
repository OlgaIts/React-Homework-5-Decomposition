interface ImageProps {
  alt?: string;
  className?: string;
  src: string;
}

export const Image = ({src, alt, className}: ImageProps) => {
  return <img src={src} alt={alt} className={className} width='100px' />;
};
