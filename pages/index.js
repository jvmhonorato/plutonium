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
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div className="bg-white  dark:bg-black">
      <NextSeo
        title="Antigolpe Brasil"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutonium.vercel.app/",
          title: "Antigolpe Brasil",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'SEU_PIXEL_ID_AQUI');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <Header />
      <div className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">

            <HomePage />




          </div>




        </div>

      </div>
      <Btn />
      
      <Vsl />
    
   
     

      <Features />
      <SocialProof />
      <Pricing />
      
      <Footer />
      
    </div>
  );
}
