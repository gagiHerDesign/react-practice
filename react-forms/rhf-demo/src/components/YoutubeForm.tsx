import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


type FormValues = {
  username: string
  email: string
  channel: string
}

export const YoutubeForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "batman",
      email: "batman@gmail.com",
      channel: "batman"
    }
  })
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState
  // const { name, ref, onChange, onBlur } = register('username')

  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data)
  }

  return (
    <>
      <h2>YoutubeForm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">username</label>
        <input type="text" id="username"
          {...register('username',
            {
              required: {
                value: true,
                message: "username is required"
              }, maxLength: 10
            })}
        />
        <p className='error'>{errors.username?.message}</p>

        <label htmlFor="email">email</label>
        <input type="email" id="email"
          {...register('email', {
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "invalid email address"
            }, validate: {
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "enter a different email address"
                )
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("yahoo.com") ||
                  "yahoo email addresses are not supported"
                )
              }
            }
          }
          )} />
        <p className='error'>{errors.email?.message}</p>

        <label htmlFor="channel">channel</label>
        <input type="text" id="channel" {...register('channel')} />
        <p className='error'>{errors.channel?.message}</p>

        <button>submit</button>
      </form>
      <DevTool control={control} />
    </>
  )
}