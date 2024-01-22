'use client';

import { ReactNode, FC } from 'react';
import {I18nextProvider} from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance, Resource } from 'i18next';

interface TranslationsProviderProps {
    children: ReactNode;
    locale: string;
    namespaces: string[];
    resources: Record<string, Resource>;
}

const TranslationsProvider: FC<TranslationsProviderProps> = ({children, locale, namespaces, resources}) => {
    const i18n = createInstance();

    initTranslations(locale, namespaces, i18n, resources);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default TranslationsProvider;