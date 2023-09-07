import { ApiProvider } from '@/api'
import { Counter } from '@/components/counter'
import CreateUser from '@/components/create-user'

function App() {
  return (
    <ApiProvider>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">Admin App</h1>
        <Counter />
        <CreateUser />
      </main>
    </ApiProvider>
  )
}

export default App
