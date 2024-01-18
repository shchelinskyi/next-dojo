import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
import StoreProvider from "@/providers/StoreProvider";
import Main from "@/components/Main";

// const i18nNamespaces = ['common'];
//
// type HomeProps = {
//     params: {
//         locale: string
//     }
// }

const Home = async () => {
    // const {resources} = await initTranslations(locale, i18nNamespaces);

    return (
        // <TranslationsProvider
        //     namespaces={i18nNamespaces}
        //     locale={locale}
        //     resources={resources}>
            <StoreProvider>
                <Main/>
            </StoreProvider>
        // </TranslationsProvider>
    )
}

export default Home;
