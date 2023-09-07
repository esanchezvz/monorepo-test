import { createTRPCRouter, publicProcedure } from '../trpc'
import { z } from 'zod'

export const userRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx
    return await db.user.findMany()
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx
      const { email, name } = input

      await db.user.create({
        data: {
          email,
          name,
        },
      })

      return 'User created successfuly.'
    }),
})
