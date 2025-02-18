import { useEffect, useState } from "react";
import "./style.css";

async function fetchMovies() {
  try{
    const response = await fetch('/movies.json');
    if (!response.ok) {
      throw new Error("Erro ao carregar filmes" + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

type Movie = {
  id: number;
  nome: string;
  genero: string;
  imagem: string;
};

function RenderMoviesTable() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const moviesArray = await fetchMovies();
      setMovies(moviesArray);
    }
    loadMovies();
  }, []);

  return (
    <div className="table">
      <table>
        <thead>
          <tr className="titles">
            <th className="rounded-top-left">Nome</th>
            <th>Gênero</th>
            <th className="rounded-top-right">Capa</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.id} className={index % 2 === 0 ? "content" : "content_middle"}>
              <td>{movie.nome}</td>
              <td>{movie.genero}</td>
              <td><img className="banner" src={movie.imagem} alt={movie.nome} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderMoviesTable;