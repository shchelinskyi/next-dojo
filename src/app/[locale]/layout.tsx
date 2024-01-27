import React from "react";
import type {Metadata} from 'next';
import './globals.scss';
import i18nConfig from '../../../i18nConfig';
import {dir} from 'i18next';
import TheFooter from "@/components/TheFooter";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/providers/TranslationsProvider";
import FacebookClientProvider from "@/providers/FacebookProvider";


export const metadata: Metadata = {
    title: 'Школа Кіокушинкай карате Misak Dojo для дітей та дорослих',
    description: 'Кіокушинкай карате на Мінській, Оболоні та Позняках для дітей та дорослих. Ставай частиною нашої дружньої команди, займайся у сучасному Доджо!',
    generator: 'Next.js',
    applicationName: 'Misak Dojo',
    metadataBase: new URL('https://misakdojo.com'),
    publisher:'https://www.facebook.com/misakdojo/',
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en',
            'ru-RU': '/ru',
            'uk-UA':'/'
        },
    },
    openGraph: {
        title: 'Школа Кіокушинкай карате Misak Dojo для дітей та дорослих',
        description: 'Кіокушинкай карате на Мінській, Оболоні та Позняках для дітей та дорослих. Ставай частиною нашої дружньої команди, займайся у сучасному Доджо!',
        url: 'https://misakdojo.com/',
        siteName: 'Школа «Кіокушинкай карате» в місті Київ, для дорослих та дітей',
        type: 'website',
        images: [
            {
                url: 'https://misakdojo.com/og-image.webp',
                width: 1680,
                height: 882,
                alt: 'Dojo',
            },
        ],
        locale: 'ua',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
    manifest: 'https://misakdojo.com/manifest.json',
    twitter: {
        card: 'summary_large_image',
        title: 'Школа кіокушинкай карате Misak Dojo в Києві для дітей та дорослих',
        description: 'Ставай частиною нашої дружньої команди, займайся у сучасному Доджо та розвивай силу і дух справжнього воїна!',
        images: ['https://misakdojo.com/og-image.webp'],
    },
    category: 'sports',
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
            <FacebookClientProvider>
                {children}
                <TheFooter/>
            </FacebookClientProvider>
        </TranslationsProvider>
        </body>
        </html>
    );
}