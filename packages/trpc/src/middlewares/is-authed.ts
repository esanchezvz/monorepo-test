import { TRPCError } from '@trpc/server'
import { middleware } from '../index'

export const isAuthed = middleware(async (opts) => {
  const { ctx, next } = opts
  if (!ctx?.user.id) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({
    ctx: {
      user: ctx.user,
    },
  })
})
