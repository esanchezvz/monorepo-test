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
        email: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      // const { db } = ctx
      // const { email, name } = input

      console.log({ input })

      // const user = await db.user.create({
      //   data: {
      //     email,
      //     name,
      //   },
      // })

      return {
        data: input,
        message: 'User created successfuly.',
      }
    }),
})
