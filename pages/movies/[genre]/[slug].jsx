import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";
import theme from "../../../theme/theme";
import fetch from "isomorphic-unfetch";
import { NextSeo } from "next-seo";

const Movie = ({ movie }) => {
  const SEO = {
    title: `Next Movies | ${movie.title}`,
    description: `${movie.description}`,
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Box theme={theme} variant="container">
        <Box as="h2" my={40}>
          {movie.title}
        </Box>
        <Box maxWidth={600}>{movie.description}</Box>
      </Box>
    </>
  );
};

export async function getServerSideProps(context) {

  const { slug } = context.query;
  console.log(context);

  const res = await fetch(`http://165.232.136.226:1337/movies?slug=${slug}`);
  const data = await res.json();

  return {
    props: {
      movie: data[0],
    }, // will be passed to the page component as props
  };
}

export default Movie;
