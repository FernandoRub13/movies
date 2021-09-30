import styled from "@emotion/styled";
import Link from 'next/link'

const Card = ({ movie }) => {
  const { API_URL } = process.env;

  if(movie.genres.length === 0){
    movie.genres= [{}]
    movie.genres[0].slug = 'uncategorized'
  }

  return (
    <CardStyled>
      <div className="poster">
        {movie.poster && <img src={API_URL + movie.poster.url} alt="" />}
      </div>
      <div className="body">
      <h3> {movie.title}</h3>
        
        <p dangerouslySetInnerHTML={{ __html: movie.description }}></p>
        <Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genres[0].slug}/${movie.slug}`}>
          <a >More of this movie</a>
        </Link>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 30px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .poster {
    img {
      width: 100%;
    }
  }

  .body {
    padding: 20px;
    h3 {
      margin-bottom: 20px;
    }
    p {
      color: #777666;
      line-height: 1.5;
    }
  }
`;

export default Card;
