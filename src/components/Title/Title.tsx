import {ReactNode} from "react";

interface TitleProps {
  children: ReactNode;
  tag?: "h2" | "h3";
  className?: ReactNode;
}
export const Title = ({children, tag, className}: TitleProps) => {
  const H = tag === "h2" ? "h2" : "h3";
  return <H className={`${className}`}>{children}</H>;
};
