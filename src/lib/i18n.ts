export function localizeHref(path: string, locale: string): string {
	const clean = delocalizePath(path);
	if (locale === 'es') return clean;
	return `/${locale}${clean}`;
}

export function delocalizePath(pathname: string): string {
	for (const prefix of ['/en', '/pt']) {
		if (pathname === prefix || pathname.startsWith(prefix + '/')) {
			return pathname.slice(prefix.length) || '/';
		}
	}
	return pathname;
}
