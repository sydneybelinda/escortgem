import React from "react";
import Head from "next/head";
import Config from "../../config";

const Meta = (props) => {
  const m = props.Meta;

  return (
    <Head>
      <title>{m.title}</title>
      <meta name='viewport' 
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0'/>
      <meta name="description" content={m.description} />
      <meta name="og:title" property="og:title" content={m.title}></meta>
      <meta name="twitter:card" content={m.description}></meta>
      <link rel="canonical" href={Config.url + m.page}></link>

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-56311709-1"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-56311709-1');
    `,
        }}
      />
    </Head>
  );
};

export default Meta;
