import {baseWEB} from '@/server/API/API';
import Head from 'next/head';

const MetaTag = ({title , desc , canonical , schema }) => {
  return (
    <Head>  
      <title>{title}</title>   
      <link rel="canonical" href={`${baseWEB+canonical || ""}`} />
      <meta name="description" content={desc} /> 
      <link rel="icon" href="/Logo.png" sizes="any" />
      {/* <meta property="og:title" content={title} /> */}
      {/* <meta property="og:description" content={desc} /> */}
      <meta property="og:url" content={baseWEB} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  )
}

export default MetaTag
