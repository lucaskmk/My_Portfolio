import { useLang } from '../useLang';

// Compact EN/PT switch for the header; it changes the language of the whole site
export default function LangToggle() {
  const [lang, setLang] = useLang();

  return (
    <div role="group" aria-label={lang === 'en' ? 'Language' : 'Idioma'} className="flex p-0.5 card-block border border-white/10 rounded-full">
      {/* The invisible ::after stretches each tap area to about 44px tall without changing the look */}
      {(['en', 'pt'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`relative px-2.5 py-1 rounded-full text-[11px] font-bold transition-all after:absolute after:inset-x-0 after:-inset-y-2.5 ${
            lang === option ? 'bg-white text-black shadow' : 'text-neutral-400 hover:text-white'
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
