import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { lightThemeColors, darkThemeColors } from "./colorPalettes.ts";

// Definir el tipo para el contexto
interface ThemeContextType {
  theme: 'dark' | 'light'; // Definir el tipo específico para theme
  setTheme: (theme: 'dark' | 'light') => void; // Ajustar también setTheme
}

// Crear el contexto con un valor inicial indefinido
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = Cookies.get('theme');
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      return savedTheme as 'dark' | 'light';
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const applyTheme = (currentTheme: 'dark' | 'light') => {
      const htmlElement = document.querySelector('html');
      if (htmlElement) {
        if (currentTheme === 'dark') {
          htmlElement.classList.add('dark');
        } else {
          htmlElement.classList.remove('dark');
        }
      }
    };

    // Aplicar el tema basado en la cookie o el preferido del sistema
    const savedTheme = Cookies.get('theme');
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme as 'dark' | 'light');
      applyTheme(savedTheme as 'dark' | 'light');
    } else {
      applyTheme(theme);
    }

    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      applyTheme(newTheme);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, [theme]);


  // Determinar qué paleta de colores usar según el tema actual
  const themeColors = theme === 'dark' ? darkThemeColors : lightThemeColors;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <style>
        {`
          :root {
            --color-primary-first: ${themeColors.primary.first};
            --color-primary-second: ${themeColors.primary.second};
            --color-primary-third: ${themeColors.primary.third};
            
            --color-secondary-first: ${themeColors.secondary.DEFAULT};

            --color-border-first: ${themeColors.border.first};
            --color-border-second: ${themeColors.border.second};

            --color-text-first: ${themeColors.text.first};
            --color-text-second: ${themeColors.text.second};
            --color-text-third: ${themeColors.text.third};

            --color-background-first: ${themeColors.background.first};
            --color-background-second: ${themeColors.background.second};
            --color-background-third: ${themeColors.background.third};
            --color-background-fourth: ${themeColors.background.fourth};

            --color-colorOpacity: ${themeColors.colorOpacity};
            --color-primaryOpacity: ${themeColors.primaryOpacity};

            --color-error-text: ${themeColors.error.text};

            --color-form-background-one: ${themeColors.form.background.one};
            --color-form-background-two: ${themeColors.form.background.two};
            --color-form-background-three: ${themeColors.form.background.three};
            --color-form-button-background: ${themeColors.form.button.background};
            --color-form-button-text: ${themeColors.form.button.text};
            --color-form-button-hover: ${themeColors.form.button.hover};
            --color-form-button-sent: ${themeColors.form.button.sent};
            --color-form-placeholder: ${themeColors.form.placeholder};
            }
        `}
      </style>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
