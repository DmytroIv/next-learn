import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export const icons = {
  up: '⇧',
  close: '⤫',
  menu: '🍔'
};

export interface IButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'white',
  icon: 'up' | 'close' | 'menu'
}
