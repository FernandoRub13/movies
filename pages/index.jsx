import Image from "next/image";
import Card from "../components/Card";
import { Flex, Box } from "reflexbox";
import theme from "./../theme/theme";

export default function Home({ movies }) {
  // console.log(movies);

  return (
    <Box theme={theme} variant="container">
      <Box my={40} as="h2">
        Latest Movies
      </Box>
      <Flex flexWrap='wrap' justifyContent="space-between" flexDirection={["column", "row", null, "row"]}>
        {movies.map((movie, index) => (
          <Box  key={index} width={["100%", '45%', null, "30%","10px"]}>
            <Card movie={movie}></Card>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps(context) {


  const res = await fetch(`http://165.232.136.226:1337/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data,
    }, // will be passed to the page component as props
  };
}
