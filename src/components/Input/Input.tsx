import {
  UseFormRegister,
  RegisterOptions,
  Path,
  FieldValues,
} from 'react-hook-form'

export interface InputProps<TFieldValues extends FieldValues>
  extends React.HTMLAttributes<HTMLInputElement> {
  id: string
  name: Path<TFieldValues>
  type: string
  register: UseFormRegister<TFieldValues>
  rules?: RegisterOptions
}

export function Input<TFieldValues extends FieldValues>({
  name,
  register,
  rules,
  ...props
}: InputProps<TFieldValues>): JSX.Element {
  return <input {...props} {...register(name, rules)} />
}
