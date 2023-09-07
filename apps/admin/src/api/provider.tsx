import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client'
import superjson from 'superjson'
import { api } from './trpc'

const apiClient = api.createClient({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: `http://localhost:4000/api`,
    }),
  ],
})

const queryClient = new QueryClient()

type ApiProviderProps = {
  children: React.ReactNode
}

export const ApiProvider = ({ children }: ApiProviderProps) => {
  return (
    <api.Provider client={apiClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </api.Provider>
  )
}
