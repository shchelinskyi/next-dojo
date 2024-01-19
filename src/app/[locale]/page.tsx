import StoreProvider from "@/providers/StoreProvider";
import Main from "@/components/Main";


const Home =  () => {

    return (
            <StoreProvider>
                <Main/>
            </StoreProvider>
    )
}

export default Home;
