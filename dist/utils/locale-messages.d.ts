import type { AST as VAST } from 'vue-eslint-parser';
import type { RuleContext, I18nLocaleMessageDictionary, LocaleKeyType } from '../types';
export declare abstract class LocaleMessage {
    readonly fullpath: string;
    readonly localeKey: LocaleKeyType;
    readonly file: string;
    readonly localePattern: RegExp;
    private _locales;
    constructor({ fullpath, locales, localeKey, localePattern }: {
        fullpath: string;
        locales?: string[];
        localeKey: LocaleKeyType;
        localePattern?: string | RegExp;
    });
    abstract getMessagesInternal(): I18nLocaleMessageDictionary;
    getLocalePatternWithRegex(localePattern?: string | RegExp): RegExp;
    get messages(): I18nLocaleMessageDictionary;
    get locales(): string[];
    isResolvedLocaleByFileName(): boolean;
    getMessagesFromLocale(locale: string): I18nLocaleMessageDictionary;
}
export declare class BlockLocaleMessage extends LocaleMessage {
    readonly block: VAST.VElement;
    private lang;
    private _messages;
    constructor({ block, fullpath, locales, localeKey, lang }: {
        block: VAST.VElement;
        fullpath: string;
        locales?: string[];
        localeKey: LocaleKeyType;
        context: RuleContext;
        lang?: string;
    });
    getMessagesInternal(): I18nLocaleMessageDictionary;
}
export declare class UseI18nLocaleMessage extends LocaleMessage {
    private _messages;
    constructor({ fullpath, messages }: {
        fullpath: string;
        messages: I18nLocaleMessageDictionary;
    });
    getMessagesInternal(): I18nLocaleMessageDictionary;
}
export declare class FileLocaleMessage extends LocaleMessage {
    private _resource;
    private _exportName;
    constructor({ fullpath, locales, localeKey, localePattern, exportName }: {
        fullpath: string;
        locales?: string[];
        localeKey: LocaleKeyType;
        localePattern?: string | RegExp;
        exportName?: string | null;
    });
    getMessagesInternal(): I18nLocaleMessageDictionary;
}
export declare class LocaleMessages {
    readonly localeMessages: LocaleMessage[];
    constructor(localeMessages: LocaleMessage[]);
    get locales(): string[];
    isEmpty(): boolean;
    findExistLocaleMessage(fullpath: string): LocaleMessage | null;
    findBlockLocaleMessage(block: VAST.VElement): BlockLocaleMessage | null;
    findMissingPath(key: string): string | null;
}
