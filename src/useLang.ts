import React from 'react';

export type Lang = 'en' | 'pt';

const STORAGE_KEY = 'lang';

// Language choice shared between pages and remembered across visits
export function useLang() {
  const [lang, setLangState] = React.useState<Lang>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'pt' ? 'pt' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  return [lang, setLang] as const;
}
