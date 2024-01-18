import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
import StoreProvider from "@/providers/StoreProvider";
import ContractOfferUA from "@/components/ContractOffer/ContractOfferUA";
import ContractOfferRU from "@/components/ContractOffer/ContractOfferRU";
import ContractOfferEN from "@/components/ContractOffer/ContractOfferEN";

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
                {locale === "ua" &&  <ContractOfferUA/>}
                {locale === "ru" &&  <ContractOfferRU/>}
                {locale === "en" &&  <ContractOfferEN/>}
            </StoreProvider>
        </TranslationsProvider>
    )
}

export default Home;
