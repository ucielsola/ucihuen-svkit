export function formatDate(dateStr) {
	const date = new Date(dateStr);
	const options = { weekday: 'short', day: 'numeric' };
	return date.toLocaleDateString('es-AR', options);
}
