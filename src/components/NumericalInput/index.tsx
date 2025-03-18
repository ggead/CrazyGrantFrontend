import React from 'react'
import './index.scss'

const inputRegex = new RegExp('^\\d*(?:\\\\[.])?\\d*$') // match escaped "." characters via in a non-capturing group

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const Input = React.memo(function Input({
  value,
  onUserInput,
  placeholder,
  title,
  className,
  ...rest
}: {
  value: string | number
  onUserInput: (input: string) => void
  title?: string
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {
  const enforcer = (nextUserInput: string) => {
    if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
      onUserInput(nextUserInput)
    }
  }

  return (
    <input
      className={`numerical-input placeholder:text-[#989899] outline-none ${className}`}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        enforcer(event.target.value.replace(/,/g, '.'))
      }}
      inputMode='decimal'
      title={title || 'Amount'}
      autoComplete='off'
      autoCorrect='off'
      type='text'
      pattern='^[0-9]*[.,]?[0-9]*$'
      placeholder={placeholder || '0.0'}
      minLength={1}
      maxLength={19}
      spellCheck='false'
      {...rest}
    />
  )
})

export default Input
