import ContractOfferUA from "@/components/ContractOffer/ContractOfferUA";
import ContractOfferRU from "@/components/ContractOffer/ContractOfferRU";
import ContractOfferEN from "@/components/ContractOffer/ContractOfferEN";


type PageProps = {
    params: {
        locale: string
    }
}

const Page = ({params: {locale}}: PageProps) => {

    return (
       <>
                {locale === "ua" &&  <ContractOfferUA/>}
                {locale === "ru" &&  <ContractOfferRU/>}
                {locale === "en" &&  <ContractOfferEN/>}
       </>
    )
}

export default Page;
