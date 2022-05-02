export interface Cat {
  name: string
  image: string
  cutenessLevel: number
}

export type CatListProps = {
  cats: Cat[]
}

export type CatCardProps = {
  cat: Cat
}
