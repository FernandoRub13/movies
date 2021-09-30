import fetch from 'isomorphic-unfetch'
import router, { useRouter } from 'next/router';
import { Box, Flex } from "reflexbox"
import theme from '../../theme/theme';

const MoviesPage = ({movies, page, numberOfMovies}) => {
  const router = useRouter()
  console.log(numberOfMovies);
  const lastPage = Math.ceil(numberOfMovies/3)
  return (
    <Box theme={theme} variant="container" pt={40} >
      <ul>
        {
          movies.map(movie => (
            <li key={movie.id} >
              <h3>{movie.title}</h3>
            </li>
          ))
        }
      </ul>
      <Flex>
      <button disabled={+page<=1} onClick={()=>router.push(`/movies?page=${page-1}`)} >Prev</button>
      
      <button disabled={+page >= lastPage} onClick={()=>router.push(`/movies?page=${page+1}`)} >Next</button>
      </Flex>
    </Box>
  )
}

export async function getServerSideProps({query}){
  const {API_URL} = process.env;
  if (!query.page) {
    query.page=1
  }
  let start_page= +query.page === 1 ? 0 : (+query.page -1) *3

  const numberOfMoviesRespone = await fetch(`${API_URL}/movies/count`);
  const numberOfMovies = await numberOfMoviesRespone.json()
  const res = await fetch(`${API_URL}/movies?_limit=3&_start=${start_page}`);
  const data = await res.json();

  return {
    props: {
      movies: data,
      page: +query.page,
      numberOfMovies
    }
  }

}

export default MoviesPage
