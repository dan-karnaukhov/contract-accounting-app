interface InputLabelProps {
  htmlFor: string
  text?: string
  className?: string
}

function InputLabel({ text, ...props }: InputLabelProps): JSX.Element {
  return <>{text ? <label {...props}>{text}</label> : null}</>
}

export default InputLabel
