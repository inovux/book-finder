import React, { ChangeEvent, FC, useState } from 'react'

import styles from './Input.module.css'

interface IInput {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  value?: string
  testId?: string
  isSearchInput?: boolean
}

export const Input: FC<IInput> = ({
  onChange,
  placeholder,
  value,
  testId,
  isSearchInput,
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      return onChange(e)
    }

    setInputValue(e.target.value)
  }

  return (
    <input
      data-testid={testId}
      className={`${styles.container} ${
        isSearchInput ? styles.searchInput : ''
      }`}
      onChange={handleOnChange}
      placeholder={placeholder}
      type="text"
      value={value || inputValue}
    />
  )
}
