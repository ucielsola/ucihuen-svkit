export function getThemeByTime(): 'light' | 'dark' {
	const hour = new Date().getHours();
	return hour >= 6 && hour < 18 ? 'light' : 'dark';
}
