"use client";
import React from "react";
import { FacebookProvider } from 'react-facebook';


const FacebookClientProvider = ({children,}: { children: React.ReactNode }) => {


    return <FacebookProvider appId="317786397883664">{children}</FacebookProvider>
}

export default  FacebookClientProvider;