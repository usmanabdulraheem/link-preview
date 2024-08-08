import Info from "@/components/github-info";
import Head from "next/head";
import { GetServerSidePropsContext } from "next/types";

// This gets called on every request
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Pass data to the page via props
  return {
    props: {
      slug: context.params?.slug,
    },
  };
}

const Page = ({ slug }: any) => {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>Link preview</title>
        <meta name="description" content="Link preview info" />

        {/* Facebook Meta Tags */}
        <meta
          property="og:image"
          content={`https://link-preview-poc.netlify.app/api/og/${slug}`}
        />
        <meta property="og:description" content="Link preview info" />
        <meta property="og:title" content="Link preview info" />
        <meta
          property="og:url"
          content={`https://link-preview-poc.netlify.app/github/${slug}`}
        />
        <meta property="og:image:width" content="800"></meta>
        <meta property="og:image:height" content="488"></meta>
        <meta property="og:type" content="object"></meta>

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="link-preview-poc.netlify.app"
        />
        <meta
          property="twitter:url"
          content={`https://link-preview-poc.netlify.app/github/${slug}`}
        />
        <meta name="twitter:title" content="Link preview info" />
        <meta name="twitter:description" content="Link preview info" />
        <meta
          name="twitter:image"
          content={`https://link-preview-poc.netlify.app/api/og/${slug}`}
        />
      </Head>
      <Info />;
    </>
  );
};

export default Page;
