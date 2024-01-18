import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
import FighterCup from "@/components/NewsCard/NewsItems/FighterCup";

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
            <FighterCup/>
        </TranslationsProvider>
    )
}

export default Home;