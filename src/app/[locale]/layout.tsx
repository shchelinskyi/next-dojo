import React from "react";
import type {Metadata} from 'next';
import './globals.scss'
import i18nConfig from '../../../i18nConfig';
import {dir} from 'i18next';
import TheFooter from "@/components/TheFooter";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/providers/TranslationsProvider";

export const metadata: Metadata = {
    title: 'Школа Кіокушинкай карате Misak Dojo для дітей та дорослих',
    description: 'Кіокушинкай карате на Оболоні та Позняках для дітей та дорослих. Ставай частиною нашої дружньої команди, займайся у сучасному Доджо!',
}

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({locale}));
}

const i18nNamespaces = ['common'];

export default async function RootLayout({children, params: {locale}}: {
    children: React.ReactNode,
    params: {
        locale: string
    }
}) {

    const {resources} = await initTranslations(locale, i18nNamespaces);
    return (
        <html lang={locale} dir={dir(locale)}>
            <body>
            <TranslationsProvider
                namespaces={i18nNamespaces}
                locale={locale}
                resources={resources}>
            {children}
            <TheFooter/>
            </TranslationsProvider>
            </body>
        </html>
    );
}