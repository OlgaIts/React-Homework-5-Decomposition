interface NewsProps {
  className?: string;
  icon?: string;
  text: string;
  src?: string;
}

export const News = ({className, icon, text, src}: NewsProps) => {
  return (
    <div>
      <i className='material-icons'>{icon}</i>
      <a href={src} className={className}>
        {text}
      </a>
    </div>
  );
};
