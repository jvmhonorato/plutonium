import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import SocialProof from "../components/SocialProof";
import VideoPlayer from "../components/VideoPlayer";
import Vsl from "../components/Vsl";
import Btn from "../components/Btn";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="Manual Antigolpe Brasil"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutonium.vercel.app/",
          title: "Manual Antigolpe Brasil",
          description: "Plutonium – where darkness meets the web.",
          images: [
            {
              url: "blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974",
            },
          ],
          site_name: "Manual Antigolpe Brasil",
        }}
        twitter={{
          handle: "@saurishhh",
          site: "https://plutonium.vercel.app/",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
            Você realmente sabe onde estão seus dados, senhas e informações pessoais?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500 mr-2">
               Saiba quais são os golpes digitais mais usados no
              </span>
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-green-500 via-yellow-500 to-blue-500 dark:from-green-500 dark:via-yellow-400 dark:to-blue-500">
                Brasil 
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
            
            Imagine se <strong>seus dados mais privados</strong> – como senhas, números de cartão de crédito e conversas pessoais – já tivessem sido <strong>comprometidos</strong>… sem você perceber. <strong>Será que seu celular já foi clonado? Seus dados estão circulando na dark web?</strong> O que você não sabe pode ser muito mais perigoso do que imagina.<strong>Descubra agora o que pode estar acontecendo com suas informações e o que você pode fazer para protegê-las antes que seja tarde.</strong> 
            </p>
            <Btn/>
         
          </div>
          
            
              <Vsl/>
          
        </div>
        <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        />
      </div>
      
      <Sponsors />
      <Features />
      <SocialProof/>
      <Pricing />
      <Footer />
    </div>
  );
}
