import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
import UsefulInfo from "@/components/NewsCard/NewsItems/UsefulInfo";

const i18nNamespaces = ['common'];

type HomeProps = {
    params: {
        locale: string
    }
}

const Home = async ({params: {locale}}: HomeProps) => {
    const {resources} = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <UsefulInfo/>
        </TranslationsProvider>
    )
}

export default Home;