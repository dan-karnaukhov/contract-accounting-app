import { FieldValues } from 'react-hook-form'

import { BaseField, BaseFieldProps } from './BaseField'

function TextField<TFieldValues extends FieldValues>({
  ...props
}: Omit<BaseFieldProps<TFieldValues>, 'type'>) {
  return <BaseField type='text' {...props} />
}

export default TextField
