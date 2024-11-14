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

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="Plutonium"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutonium.vercel.app/",
          title: "Plutonium",
          description: "Plutonium – where darkness meets the web.",
          images: [
            {
              url: "blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974",
            },
          ],
          site_name: "Plutonium",
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
      <section className="relative">
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
            {/* Após o grande <strong>vazamento de dados</strong> em massa de 2021, mais de <strong>1/3 dos brasileiros</strong> sofreram algum tipo de <strong>golpe digital</strong> nos ultimos anos. Hoje, você descobrirá se seus dados foram expostos, se seu celular foi clonado ou se está sendo <strong>monitorado</strong>. */}
            Imagine se <strong>seus dados mais privados</strong> – como senhas, números de cartão de crédito e conversas pessoais – já tivessem sido <strong>comprometidos</strong>… sem você perceber. <strong>Será que seu celular já foi clonado? Seus dados estão circulando na dark web?</strong> O que você não sabe pode ser muito mais perigoso do que imagina.<strong>Descubra agora o que pode estar acontecendo com suas informações e o que você pode fazer para protegê-las antes que seja tarde.</strong> 
            </p>
            <div className="mt-6 text-center md:ml-6">
              <Link
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="https://github.com/minor/plutonium/"
              >
                <span className="flex justify-center">GitHub Link</span>
              </Link>
              <br className="sm:hidden" />
              <Link href="404">
                <p
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">See a Demo</span>
                </p>
              </Link>
            </div>
          </div>
          
            
              <Vsl/>
          
        </div>
        <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        />
      </section>
      <Sponsors />
      <Features />
      <SocialProof/>
      <Pricing />
      <Footer />
    </div>
  );
}
