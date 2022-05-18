export interface IProductCharacteristic {
  value: string
  name: string
}

export interface IReviewModel {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  createdAt: Date
}

export interface IProductModel {
  _id: string
  category: string
  categories: string[]
  tags: string[]
  title: string
  link: string
  price: number
  credit: number
  oldPrice: number
  description: string
  characteristics: IProductCharacteristic[]
  createdAt: Date
  updatedAt: Date
  image: string
  initialRating: number
  reviews: IReviewModel[]
  reviewCount: number
  reviewAvg?: number
  advantages?: string
  disadvantages?: string
}
