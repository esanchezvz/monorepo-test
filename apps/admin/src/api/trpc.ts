import { createTRPCReact } from '@trpc/react-query'

import { type AppRouter } from '@form/trpc'

/** A set of type-safe react-query hooks for your tRPC API. */
export const api = createTRPCReact<AppRouter>()
