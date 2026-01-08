import type { ReplacementSelectorSet, Site } from ".";

const repositorySideTreeFolderImplementation: ReplacementSelectorSet = {
	row: '.repos-file-explorer-tree-cell > div',
	filename: 'a',
	icon: '.fluent-icons-enabled > span',
	// icon: '.fluent-icons-enabled:not(:has(.ms-Icon--ChevronRightMed, .ms-Icon--ChevronDownMed)) > span',
	isDirectory: (_rowEl, _fileNameEl, iconEl) =>
		true,
	isSubmodule: (_rowEl, _fileNameEl, _iconEl) =>
		false, // TODO
	isCollapsable: (rowEl, fileNameEl, iconEl) =>
		true
};

const repositorySideTreeFileImplementation: ReplacementSelectorSet = {
	row: '.repos-file-explorer-tree-cell:not(:has(>div))',
	filename: 'a',
	icon: '.fluent-icons-enabled:nth-child(2) > span',
	// icon: '.fluent-icons-enabled:not(:has(.ms-Icon--ChevronRightMed, .ms-Icon--ChevronDownMed)) > span',
	isDirectory: (_rowEl, _fileNameEl, iconEl) =>
		false,
	isSubmodule: (_rowEl, _fileNameEl, _iconEl) =>
		false, // TODO
	isCollapsable: (rowEl, fileNameEl, iconEl) =>
		false
};

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
};



export const devops: Site = {
	domains: ['dev.azure.com'],
	replacements: [
		repositorySideTreeFolderImplementation,
		repositorySideTreeFileImplementation,
		repositoryMainImplementation
	]
};
