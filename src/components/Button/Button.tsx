import {ReactNode} from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
export const Button = ({children, className}: ButtonProps) => {
  return <button className={`${className}`}>{children}</button>;
};
