import type { DictionaryWord, Synonym } from "src/integrations/types";

export interface DictionarySettings {
    defaultLanguage: string;
	definitionApiName: string;
	synonymApiName: string;
	partOfSpeechApiName: string;
	shouldShowSynonymPopover: boolean;
	shouldShowCustomContextMenu: boolean;
	advancedSynonymAnalysis: boolean;
	useCaching: boolean;
	cachedDefinitions: CachedDictionaryWord[];
	cachedSynonyms: CachedSynonymCollection[];
	folder: string;
	capitalizedFileName: boolean;
	suffix: string;
	prefix: string;
	template: string;
}

export interface CachedDictionaryWord{
	content: DictionaryWord;
	api: string;
}

export interface CachedSynonymCollection{
	word: string;
	content: Synonym[];
	api: string;
}