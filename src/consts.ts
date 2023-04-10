export const SITE = {
	title: 'ZH: Modded',
	description: 'Zephyr Heights: Modded MC',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://zephyrheights.town/assets/img/Welcome.png',
		alt:
			'Zephyr Heights mascot, an orange pegasus with purple mane,' +
			' next to a cloud with the text Zephyr Heights.',
	},
	twitter: 'ZephyrHeightsSL',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/caramelpony/zephyrheightsmc/tree/main/`;

export const COMMUNITY_INVITE_URL = `https://zephyrheights.town/discord`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Section Header': [
			{ text: 'Welcome', link: 'en/welcome' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};
