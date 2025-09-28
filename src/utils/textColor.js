// Функция для определения яркости цвета фона
export function getBgBrightness(bgColor) {
  // Для упрощения считаем светлым всё, что содержит класс bg-white
  return bgColor.includes('bg-white') ? 'light' : 'dark';
}

// Функция для определения цвета текста
export function getTextColor(bgColor) {
  const brightness = getBgBrightness(bgColor);
  return brightness === 'light' ? 'text-pine-900' : 'text-white';
}