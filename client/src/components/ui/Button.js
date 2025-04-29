import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  icon,
  iconPosition = 'right',
  disabled = false,
  ...props 
}) => {
  // Define base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none';

  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3',
    xl: 'text-lg px-8 py-4'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
    secondary: 'bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-900/20',
    ghost: 'bg-transparent text-white hover:bg-white/10',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    dark: 'bg-navy-800 hover:bg-navy-700 text-white border border-white/10'
  };

  // Combined classes
  const combinedClasses = `
    ${baseClasses} 
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>
        {icon}
      </span>
    );
  };

  // Internal content with proper icon positioning
  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </>
  );

  // Render as Link if "to" prop is provided
  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  // Render as anchor if "href" prop is provided
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  // Render as button by default
  return (
    <button 
      className={combinedClasses} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;