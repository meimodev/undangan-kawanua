import Head from "next/head";

const Meta = ({ title, children }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="buat undangan digital dengan harga murah kualitas premium"
      />
      {children}

      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.DefaultProps = {
  title: "Undangan Kawanua",
};

export default Meta;
