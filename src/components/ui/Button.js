'use client';

import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Base Tailwind variants
const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = '2023',
  text_font_size = '14',
  text_font_family = 'Liberation Sans',
  text_font_weight = '400',
  text_line_height = '17px',
  text_text_align = 'center',
  text_color = '#ffffff',
  border_border_radius = '18px',
  border_border = '1 solid #ffffff19',

  // Optional layout/visual customization
  fill_background_color,
  layout_align_self,
  layout_width,
  padding,
  margin,
  position,
  layout_gap,

  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  // Validate optional parameters (avoid Tailwind injection errors)
  const valid = (val) => typeof val === 'string' && val.trim() !== '';

  // Build dynamic Tailwind classes safely
  const optionalClasses = [
    valid(layout_align_self) ? `self-${layout_align_self}` : '',
    valid(layout_width) ? `w-[${layout_width}]` : '',
    valid(padding) ? `p-[${padding}]` : '',
    valid(margin) ? `m-[${margin}]` : '',
    valid(position) ? position : '',
    valid(layout_gap) ? `gap-[${layout_gap}]` : '',
  ]
    .filter(Boolean)
    .join(' ');

  // Parse border string into usable CSS values
  const borderParts = border_border.split(' ');
  const borderWidth = borderParts[0] || '1';
  const borderStyle = borderParts[1] || 'solid';
  const borderColor = borderParts[2] || '#ffffff19';

  // Inline styles for font + colors
  const buttonStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    borderRadius: border_border_radius,
    border: `${borderWidth}px ${borderStyle} ${borderColor}`,
    ...(valid(fill_background_color) && { backgroundColor: fill_background_color }),
  };

  const handleClick = (event) => {
    if (!disabled && typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(buttonClasses({ variant, size }), optionalClasses, className)}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;
