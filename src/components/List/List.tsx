interface ListProps {
  list: string[];
}

export const List = ({list}: ListProps) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>
          <a href='#'>{item}</a>
        </li>
      ))}
    </ul>
  );
};
