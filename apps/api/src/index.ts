import express from 'express'
import cors from 'cors'
import { appRouter, createExpressMiddleware, createTRPCContext } from '@form/trpc'

const app = express()

// Express middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, _res, next) => {
  // request logger
  console.log('↔️ ', req.method, req.path, req.body ?? req.query)

  return next()
})
app.use((req, _res, next) => {
  console.log('[Express Middleware]: ', req.body)
  return next()
})

// TRPC
app.use(
  '/api',
  createExpressMiddleware({
    router: appRouter,
    createContext: createTRPCContext,
  }),
)

// Runs api
app.listen(4000, () => {
  console.log('TRPC API listening on port 4000')
})
