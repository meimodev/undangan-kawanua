import Head from "next/head";

const Meta = ({ title, image, children }) => {
	const description =
		"buat undangan digital dengan harga terjangkau, fully custom sesuaikan dengan keinginan anda, dengan design premium anti main-stream oleh disainer grafis yang handal";
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta charSet="UTF-8" />

			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.ico" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.undangankawanua.com/" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://www.undangankawanua.com/" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />

			{children}
		</Head>
	);
};

Meta.DefaultProps = {
	title: "Undangan Kawanua",
};

export default Meta;
