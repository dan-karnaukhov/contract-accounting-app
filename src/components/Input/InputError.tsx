import { FieldError } from 'react-hook-form'

interface InputErrorProps {
  error?: FieldError
  className?: string
}

function InputError({ error, className }: InputErrorProps): JSX.Element {
  return <>{error ? <div className={className}>{error?.message}</div> : null}</>
}

export default InputError
