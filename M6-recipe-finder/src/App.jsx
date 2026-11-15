import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const queryClient = new QueryClient();

// Replace with your free recipe API (e.g., TheMealDB: https://www.themealdb.com/api.php)
function useSearch(query) {
  return useQuery({
    queryKey: ["recipes", query],
    queryFn: async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    enabled: query.length > 2,
  });
}

function Search() {
  const { data, error, isLoading } = useSearch("chicken");
  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {(data?.meals || []).map((m) => (
        <li key={m.idMeal}><Link to={`/recipe/${m.idMeal}`}>{m.strMeal}</Link></li>
      ))}
    </ul>
  );
}

function Detail() {
  const { id } = useParams();
  return <p>Recipe detail for {id}</p>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/recipe/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
