import type { ReplacementSelectorSet, Site } from ".";

const repositoryMainImplementation: ReplacementSelectorSet = {
	row: '.repos-files-hub-page tbody [aria-colindex=\'1\']',
	filename: 'a',
	icon: '.fluent-icons-enabled > span',
	isDirectory: (_rowEl, _fileNameEl, iconEl) =>
		iconEl.classList.contains('repos-folder-icon'),
	isSubmodule: (_rowEl, _fileNameEl, _iconEl) =>
		false, // TODO
	isCollapsable: (_rowEl, _fileNameEl, _iconEl) =>
		false,
}

export const devops: Site = {
	domains: ['dev.azure.com'],
	replacements: [
		repositoryMainImplementation
	]
}
