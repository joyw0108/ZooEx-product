import * as React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const EarnPage = dynamic(() => import("../src/earn/index"));

export default function Index() {
    return (
        
        <EarnPage />

    )
}
