import es from '../../messages/es.json';
import en from '../../messages/en.json';
import pt from '../../messages/pt.json';

const messages: Record<string, Record<string, string>> = { es, en, pt };

export function getMessages(locale: string): Record<string, string> {
	return messages[locale] || messages['es'];
}

export function t(locale: string, key: string, params?: Record<string, string | number>): string {
	const msg = getMessages(locale)[key] || key;
	if (!params) return msg;
	return Object.entries(params).reduce(
		(str, [k, v]) => str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v)),
		msg
	);
}
