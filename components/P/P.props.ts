import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode
  size?: 's' | 'm' | 'l'
}
