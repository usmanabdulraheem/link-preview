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
        <title>GitHub Info</title>
        <meta
          property="og:image"
          content={`https://link-preview-poc.netlify.app/api/og/${slug}`}
        />
        <meta name="og:title" content="GitHub Info" />
        <meta name="og:description" content="GitHub Info" />
        <meta name="og:url" content="GitHub Info" />
      </Head>
      <Info />;
    </>
  );
};

export default Page;
