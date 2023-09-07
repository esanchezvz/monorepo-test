import { initTRPC, type inferAsyncReturnType } from '@trpc/server'
import { ZodError } from 'zod'
import superjson from 'superjson'
import { type CreateExpressContextOptions } from '@trpc/server/adapters/express'
import { PrismaClient } from '@form/db'

type CreateContextOptions = Record<string, never>

const db = new PrismaClient()

const createInnerTRPCContext = (_opts: CreateContextOptions) => {
  return {
    db,
  }
}

// Gets created for each request
export const createTRPCContext = ({ req }: CreateExpressContextOptions) => {
  console.log('[TRPC Context]: ', req.body)

  return createInnerTRPCContext({})
}

type Context = inferAsyncReturnType<typeof createTRPCContext>

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      message: parseMessage(shape.message),
      data: {
        ...shape.data,
        stack: process.env.NODE_ENV === 'production' ? undefined : shape.data.stack,
        zodError: error.cause instanceof ZodError ? error : null,
      },
    }
  },
})

const parseMessage = (message: string) => {
  try {
    return JSON.parse(message)
  } catch (error) {
    return message
  }
}

export const createTRPCRouter = t.router

export const publicProcedure = t.procedure

export { createExpressMiddleware } from '@trpc/server/adapters/express'
