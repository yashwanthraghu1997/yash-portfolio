'use client';

import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Tailwind base variants
const editTextClasses = cva(
  'w-full rounded-md border focus:outline-none focus:ring-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-400',
  {
    variants: {
      variant: {
        default: 'border-gray-300 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500',
        filled: 'border-transparent bg-gray-100 text-gray-900 focus:ring-blue-500',
        outlined: 'border-gray-400 bg-transparent text-gray-900 focus:ring-blue-500',
      },
      size: {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const EditText = ({
  // Text customization
  placeholder = 'UI/UX Design Excellence',
  text_font_size = '20',
  text_font_family = 'Liberation Sans',
  text_font_weight = '400',
  text_line_height = '23px',
  text_text_align = 'left',
  text_color = '#ffffff',

  // Optional layout props
  layout_gap,
  layout_width,
  padding,
  position,

  // Standard React input props
  variant,
  size,
  type = 'text',
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  className,
  name,
  id,
  autoComplete = 'off',
  ...props
}) => {
  // Safe validation helper
  const valid = (val) => typeof val === 'string' && val.trim() !== '';

  // Dynamic Tailwind classes
  const optionalClasses = [
    valid(layout_gap) ? `gap-[${layout_gap}]` : '',
    valid(layout_width) ? `w-[${layout_width}]` : '',
    valid(padding) ? `p-[${padding}]` : '',
    valid(position) ? position : '',
  ]
    .filter(Boolean)
    .join(' ');

  // Inline text & style customization
  const inputStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
  };

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      autoComplete={autoComplete}
      aria-disabled={disabled}
      style={inputStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        optionalClasses,
        className
      )}
      {...props}
    />
  );
};

export default EditText;
