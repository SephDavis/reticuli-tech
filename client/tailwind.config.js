// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom colors for Reticuli Technologies
        navy: {
          600: '#2D3748',
          700: '#1A202C',
          800: '#171923',
          900: '#0F1117'
        },
        // Silver/Gray themed color palette
        silver: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0A0F1A'
        },
        // Defense-themed color palette
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554'
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712'
        },
        // Additional colors specific to defense contracting
        slate: {
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },
        emerald: {
          500: '#10b981',
          600: '#059669'
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706'
        },
        red: {
          500: '#ef4444',
          600: '#dc2626'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      },
      // Animation configurations
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'fadeOut': 'fadeOut 0.5s ease-in-out',
        'slideInRight': 'slideInRight 0.3s ease-out',
        'slideOutRight': 'slideOutRight 0.3s ease-in',
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'scale': 'scale 0.3s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glitch': 'glitch 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'tech-pulse': 'tech-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 0px 0px rgba(192,192,192,0)' },
          '50%': { boxShadow: '0 0 15px 5px rgba(192,192,192,0.3)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'tech-pulse': {
          '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
      // Add box shadow variants
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-strong': 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.12)',
        'tech': '0 0 15px rgba(192, 192, 192, 0.15)',
        'tech-strong': '0 0 25px rgba(192, 192, 192, 0.25)',
        'tech-glow': '0 0 10px rgba(192, 192, 192, 0.2), 0 0 20px rgba(192, 192, 192, 0.1)',
        'tech-inner': 'inset 0 0 10px rgba(192, 192, 192, 0.15)',
      },
      // Transition customizations
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width',
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.8, 0, 0.2, 1)',
        'tech': 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
      },
      transitionDuration: {
        '400': '400ms',
        '2000': '2000ms',
      },
      // Add backdrop blur options
      backdropBlur: {
        'xs': '2px',
        'md': '6px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      // Add border radius options
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      // Add gradient backgrounds
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tech-grid': 'linear-gradient(to right, rgba(192, 192, 192, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(192, 192, 192, 0.05) 1px, transparent 1px)',
        'silver-fade': 'linear-gradient(to bottom, rgba(192, 192, 192, 0.1), transparent)',
        'tech-radial': 'radial-gradient(circle, rgba(30, 41, 59, 1) 0%, rgba(0, 0, 0, 1) 100%)',
      },
      // Background size
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'tech-grid': '40px 40px',
      },
      // Add spacing options
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Z-index values
      zIndex: {
        '60': '60',
        '70': '70',
      },
      // Height and Width
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      },
      // Max Width
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
      },
      // Max Height
      maxHeight: {
        '128': '32rem',
      },
      // Add opacity values
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '85': '0.85',
        '95': '0.95',
      },
      // Scale transforms
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
      },
      // Blur values
      blur: {
        'xs': '2px',
        'md': '6px',
      },
      // Text shadow
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.05)',
        'tech': '0 0 5px rgba(192, 192, 192, 0.5)',
      },
    }
  },
  variants: {
    extend: {
      opacity: ['dark', 'group-hover', 'group-focus'],
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'hover', 'group-hover'],
      borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'group-hover'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'group-hover'],
      boxShadow: ['dark', 'hover', 'focus', 'group-hover'],
      ringColor: ['dark', 'hover', 'focus', 'group-hover'],
      ringOffsetColor: ['dark', 'hover', 'focus'],
      ringOffsetWidth: ['dark', 'hover', 'focus'],
      ringOpacity: ['dark', 'hover', 'focus'],
      ringWidth: ['dark', 'hover', 'focus', 'group-hover'],
      transform: ['hover', 'focus', 'group-hover', 'active'],
      scale: ['hover', 'focus', 'group-hover', 'active'],
      translate: ['hover', 'focus', 'group-hover', 'active'],
      rotate: ['hover', 'focus', 'group-hover', 'active'],
      blur: ['hover', 'focus', 'group-hover'],
      grayscale: ['hover', 'focus', 'group-hover'],
      invert: ['hover', 'focus', 'group-hover'],
      filter: ['hover', 'focus', 'group-hover'],
      backdropFilter: ['hover', 'focus', 'group-hover'],
      animation: ['hover', 'group-hover'],
      textShadow: ['hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Add a plugin for text shadows
    function ({ addUtilities, theme, variants }) {
      const textShadowUtilities = {};
      Object.entries(theme('textShadow', {})).forEach(([key, value]) => {
        textShadowUtilities[`.text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`] = {
          textShadow: value,
        };
      });
      addUtilities(textShadowUtilities, variants('textShadow'));
    }
  ]
};