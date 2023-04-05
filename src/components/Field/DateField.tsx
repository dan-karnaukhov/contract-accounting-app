import { FieldValues } from 'react-hook-form'

import { BaseField, BaseFieldProps } from './BaseField'

function DataField<TFieldValues extends FieldValues>({
  ...props
}: Omit<BaseFieldProps<TFieldValues>, 'type'>) {
  return <BaseField type='date' {...props} />
}

export default DataField
