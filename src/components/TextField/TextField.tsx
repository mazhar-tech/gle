import type { ChangeEvent, ReactNode } from 'react'
import { ChevronDownIcon } from '../../assets/icons'
import './TextField.css'

export interface TextFieldProps {
  id: string
  label: string
  name: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  leading: ReactNode
  placeholder?: string
  type?: 'text' | 'date'
  trailingChevron?: boolean
}

export function TextField({
  id,
  label,
  name,
  value,
  onChange,
  leading,
  placeholder,
  type = 'text',
  trailingChevron = false,
}: TextFieldProps) {
  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
      <div className="text-field__control">
        <span className="text-field__leading">{leading}</span>
        <span className="text-field__divider" aria-hidden="true" />
        <input
          id={id}
          className={`text-field__input${type === 'date' ? ' text-field__input--date' : ''}`}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {trailingChevron ? (
          <span className="text-field__trailing">
            <ChevronDownIcon />
          </span>
        ) : null}
      </div>
    </div>
  )
}
