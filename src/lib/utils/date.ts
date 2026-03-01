export function formatDate(dateStr: string): string {
	const date = new Date(dateStr);
	const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric' };
	return date.toLocaleDateString('es-AR', options);
}
