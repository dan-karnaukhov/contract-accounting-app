import classNames from 'classnames'
import { FieldErrorsImpl, FieldError, FieldValues } from 'react-hook-form'

import {
  Input,
  InputProps,
  InputLabel as Label,
  InputError as Error,
} from '../Input'

import './style.scss'

export interface BaseFieldProps<TFieldValues extends FieldValues>
  extends InputProps<TFieldValues> {
  type: 'text' | 'email' | 'password' | 'date'
  error?: FieldError
  label?: string
  children?: React.ReactNode
}

export function BaseField<TFieldValues extends FieldValues>({
  id,
  error,
  label,
  children,
  className,
  ...props
}: BaseFieldProps<TFieldValues>): JSX.Element {
  return (
    <div className={classNames('field', className)}>
      <Label className='field__label' text={label} htmlFor={id} />
      <div className='field__container'>
        <Input className='field__input' id={id} {...props} />
        {children ? (
          <div className='field__optional-element'>{children}</div>
        ) : null}
      </div>
      <Error className='field__error' error={error} />
    </div>
  )
}
