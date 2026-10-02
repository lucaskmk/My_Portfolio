import React from 'react';
import type { Lang } from './types';

export type { Lang };

const STORAGE_KEY = 'lang';

function readStoredLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'pt' ? 'pt' : 'en';
  } catch {
    return 'en';
  }
}

type LangState = readonly [Lang, (lang: Lang) => void];

const LangContext = React.createContext<LangState>(['en', () => {}]);

// One language for the whole site, chosen in the header and remembered across visits
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(readStoredLang);

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const value = React.useMemo(() => [lang, setLang] as const, [lang, setLang]);
  return React.createElement(LangContext.Provider, { value }, children);
}

export function useLang() {
  return React.useContext(LangContext);
}
