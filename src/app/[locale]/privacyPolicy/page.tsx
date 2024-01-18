import PrivacyPolicyPageUA from "@/components/PrivacyPolicyPage/PrivacyPolicyPageUA";
import PrivacyPolicyPageRU from "@/components/PrivacyPolicyPage/PrivacyPolicyPageRU";
import PrivacyPolicyPageEN from "@/components/PrivacyPolicyPage/PrivacyPolicyPageEN";

type PageProps = {
    params: {
        locale: string
    }
}

const Page =  ({params: {locale}}: PageProps) => {

    return (
        <>
                {locale === "ua" &&  <PrivacyPolicyPageUA/>}
                {locale === "ru" &&  <PrivacyPolicyPageRU/>}
                {locale === "en" &&  <PrivacyPolicyPageEN/>}
        </>
    )
}

export default Page;
