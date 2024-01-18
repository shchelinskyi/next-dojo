import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
import StoreProvider from "@/providers/StoreProvider";
import PrivacyPolicyPageUA from "@/components/PrivacyPolicyPage/PrivacyPolicyPageUA";
import PrivacyPolicyPageRU from "@/components/PrivacyPolicyPage/PrivacyPolicyPageRU";
import PrivacyPolicyPageEN from "@/components/PrivacyPolicyPage/PrivacyPolicyPageEN";


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
            <StoreProvider>
                {locale === "ua" &&  <PrivacyPolicyPageUA/>}
                {locale === "ru" &&  <PrivacyPolicyPageRU/>}
                {locale === "en" &&  <PrivacyPolicyPageEN/>}
            </StoreProvider>
        </TranslationsProvider>
    )
}

export default Home;
