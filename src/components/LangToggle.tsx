import type { Lang } from '../useLang';

interface LangToggleProps {
  lang: Lang;
  onChange: (lang: Lang) => void;
}

export default function LangToggle({ lang, onChange }: LangToggleProps) {
  return (
    <div className="flex p-1 card-block border border-white/10 rounded-full w-fit">
      {(['en', 'pt'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={lang === option}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
            lang === option ? 'bg-white text-black shadow-lg' : 'text-neutral-500 hover:text-white'
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
