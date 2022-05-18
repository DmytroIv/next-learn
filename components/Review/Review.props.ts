import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IReviewModel } from "../../interfaces/Product.interface";

export interface IReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: IReviewModel
}
