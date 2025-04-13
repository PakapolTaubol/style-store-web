export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface Review {
  id: number
  productId: number
  username: string
  rating: number
  comment: string
  date: string
}

export interface CartItem extends Product {
  quantity: number
}
