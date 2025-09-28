@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0E2E23;
  --card: #144B39;
  --text: #FFFFFF;
}

html, body {
  background: var(--bg);
  color: var(--text);
}

.container-padded {
  @apply container mx-auto px-4 md:px-6 lg:px-8;
}

/* Стили для аккордеонов */
.details {
  @apply bg-pine-800 rounded-xl p-4 md:p-5 shadow-soft;
}
.details summary {
  @apply cursor-pointer font-semibold text-white flex items-center justify-between;
}
.details[open] summary .chev {
  transform: rotate(180deg);
}
.chev {
  transition: transform .2s ease;
}

/* Бэйдж результата */
.badge {
  @apply inline-flex items-center px-2.5 py-0.5 rounded text-sm font-semibold;
}
.badge-win { @apply bg-emerald-500 text-white; }
.badge-lose { @apply bg-red-600 text-white; }
.badge-draw { @apply bg-sand-50 text-black; }

/* Плейсхолдер логотипа в футере */
.logo-placeholder {
  width: 96px;
  height: 32px;
  border-radius: 6px;
  background: linear-gradient(90deg, #1b8a5a 0%, #6ec6a8 100%);
  opacity: .5;
}