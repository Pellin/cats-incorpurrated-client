import { rest } from 'msw'
import catData from '../data/catdata.json'

export const handlers = [
  rest.get('http://localhost:8080/cats', (req, res, ctx) => {
    return res(ctx.json(catData))
  }),
]
