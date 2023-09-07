import { api } from '@/api'

const useCreateUser = () => {
  const { mutate, ...rest } = api.user.create.useMutation()

  return [mutate, { ...rest }] as const
}

const CreateUser = () => {
  const [createUser] = useCreateUser()
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const user: {
      name: string
      email: string
    } = {
      name: data.get('name') as string,
      email: data.get('email') as string,
    }

    createUser(user)
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Input id="name" label="Name" name="name" />
      <Input id="email" label="Email" name="email" />

      <button type="submit">Save</button>
    </form>
  )
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
}

const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-white-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          {...rest}
          id={id}
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}

export default CreateUser
