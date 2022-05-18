import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  size?: 'm' | 'l'
  color: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
  href?: string
}
