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

const Page = ({slug}: any) => {
  return (
    <>
      <Head>
        <title>Link preview</title>
        <meta
          property="og:image"
          content={`https://link-preview-poc.netlify.app/api/og/${slug}`}
        />
        <meta property="og:type" content="Link preview info" />
        <meta property="og:title" content="Link preview info" />
        <meta property="og:url" content={`https://link-preview-poc.netlify.app/github/${slug}`} />
        <meta property="og:image:width" content="800"></meta>
        <meta property="og:image:height" content="488"></meta>
        <meta property="og:type" content="object"></meta>
      </Head>
      <Info />;
    </>
  );
};

export default Page;
