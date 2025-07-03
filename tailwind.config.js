/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1a1a1a', // sophisticated foundation
        'primary-50': '#f8f9fa', // lightest tint
        'primary-100': '#e9ecef', // light tint
        'primary-200': '#dee2e6', // medium light tint
        'primary-300': '#ced4da', // medium tint
        'primary-400': '#adb5bd', // medium
        'primary-500': '#6c757d', // medium dark
        'primary-600': '#495057', // dark
        'primary-700': '#343a40', // darker
        'primary-800': '#212529', // darkest
        'primary-900': '#1a1a1a', // primary base
        'primary-foreground': '#ffffff', // white

        // Secondary Colors
        'secondary': '#2d3748', // subtle depth
        'secondary-50': '#f7fafc', // lightest tint
        'secondary-100': '#edf2f7', // light tint
        'secondary-200': '#e2e8f0', // medium light tint
        'secondary-300': '#cbd5e0', // medium tint
        'secondary-400': '#a0aec0', // medium
        'secondary-500': '#718096', // medium dark
        'secondary-600': '#4a5568', // dark
        'secondary-700': '#2d3748', // secondary base
        'secondary-800': '#1a202c', // darker
        'secondary-900': '#171923', // darkest
        'secondary-foreground': '#ffffff', // white

        // Accent Colors
        'accent': '#e53e3e', // energy and urgency
        'accent-50': '#fed7d7', // lightest tint
        'accent-100': '#feb2b2', // light tint
        'accent-200': '#fc8181', // medium light tint
        'accent-300': '#f56565', // medium tint
        'accent-400': '#e53e3e', // accent base
        'accent-500': '#c53030', // medium dark
        'accent-600': '#9b2c2c', // dark
        'accent-700': '#742a2a', // darker
        'accent-800': '#63171b', // darkest
        'accent-900': '#521b1b', // deepest
        'accent-foreground': '#ffffff', // white

        // Background Colors
        'background': '#ffffff', // clean canvas
        'background-secondary': '#f7fafc', // gentle separation
        'background-tertiary': '#fafbfc', // subtle off-white

        // Surface Colors
        'surface': '#f7fafc', // gentle separation
        'surface-hover': '#edf2f7', // hover state
        'surface-active': '#e2e8f0', // active state

        // Text Colors
        'text-primary': '#1a202c', // strong readability
        'text-secondary': '#4a5568', // clear hierarchy
        'text-tertiary': '#718096', // supporting details
        'text-inverse': '#ffffff', // white text

        // Status Colors
        'success': '#38a169', // authentic verification
        'success-50': '#f0fff4', // lightest tint
        'success-100': '#c6f6d5', // light tint
        'success-200': '#9ae6b4', // medium light tint
        'success-300': '#68d391', // medium tint
        'success-400': '#48bb78', // medium
        'success-500': '#38a169', // success base
        'success-600': '#2f855a', // dark
        'success-700': '#276749', // darker
        'success-800': '#22543d', // darkest
        'success-900': '#1c4532', // deepest
        'success-foreground': '#ffffff', // white

        'warning': '#d69e2e', // stock alerts
        'warning-50': '#fffbeb', // lightest tint
        'warning-100': '#fef3c7', // light tint
        'warning-200': '#fde68a', // medium light tint
        'warning-300': '#fcd34d', // medium tint
        'warning-400': '#fbbf24', // medium
        'warning-500': '#f59e0b', // medium dark
        'warning-600': '#d69e2e', // warning base
        'warning-700': '#b45309', // dark
        'warning-800': '#92400e', // darker
        'warning-900': '#78350f', // darkest
        'warning-foreground': '#ffffff', // white

        'error': '#e53e3e', // helpful guidance
        'error-50': '#fed7d7', // lightest tint
        'error-100': '#feb2b2', // light tint
        'error-200': '#fc8181', // medium light tint
        'error-300': '#f56565', // medium tint
        'error-400': '#e53e3e', // error base
        'error-500': '#c53030', // medium dark
        'error-600': '#9b2c2c', // dark
        'error-700': '#742a2a', // darker
        'error-800': '#63171b', // darkest
        'error-900': '#521b1b', // deepest
        'error-foreground': '#ffffff', // white

        // Border Colors
        'border': '#e2e8f0', // clean separation
        'border-light': '#f1f5f9', // subtle separation
        'border-dark': '#cbd5e0', // stronger separation
      },
      fontFamily: {
        'headline': ['Inter', 'system-ui', 'sans-serif'], // headlines
        'body': ['Inter', 'system-ui', 'sans-serif'], // body text
        'cta': ['Inter', 'system-ui', 'sans-serif'], // call-to-actions
        'accent': ['JetBrains Mono', 'Consolas', 'monospace'], // technical text
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      spacing: {
        '0': '0px',
        '0.5': '0.125rem', // 2px
        '1': '0.25rem', // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem', // 8px - base grid
        '2.5': '0.625rem', // 10px
        '3': '0.75rem', // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem', // 16px - base increment
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px - base increment
        '7': '1.75rem', // 28px
        '8': '2rem', // 32px - base increment
        '9': '2.25rem', // 36px
        '10': '2.5rem', // 40px
        '11': '2.75rem', // 44px
        '12': '3rem', // 48px - base increment
        '14': '3.5rem', // 56px
        '16': '4rem', // 64px - base increment
        '20': '5rem', // 80px
        '24': '6rem', // 96px
        '28': '7rem', // 112px
        '32': '8rem', // 128px
        '36': '9rem', // 144px
        '40': '10rem', // 160px
        '44': '11rem', // 176px
        '48': '12rem', // 192px
        '52': '13rem', // 208px
        '56': '14rem', // 224px
        '60': '15rem', // 240px
        '64': '16rem', // 256px
        '72': '18rem', // 288px
        '80': '20rem', // 320px
        '96': '24rem', // 384px
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)', // minimal depth
        'DEFAULT': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.15)', // primary CTAs
        'lg': '0 8px 24px rgba(0, 0, 0, 0.12)', // modals
        'xl': '0 12px 32px rgba(0, 0, 0, 0.1)', // elevated elements
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem', // 2px
        'DEFAULT': '0.25rem', // 4px
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
        'full': '9999px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // brand animation curve
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '200': '200ms', // form feedback
        '300': '300ms', // hover states
        '400': '400ms', // content reveals
        '800': '800ms', // jersey reveal
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'jersey-reveal': 'jerseyReveal 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        jerseyReveal: {
          '0%': { transform: 'rotateY(-15deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0deg)', opacity: '1' },
        },
      },
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'header': '100',
        'sidebar': '90',
        'modal': '1000',
        'tooltip': '1010',
        'dropdown': '1020',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}