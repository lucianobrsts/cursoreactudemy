import styles from "./Search.module.css";

import { Link } from "react-router-dom";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import PostDetail from "../../components/PostDetail";

export default function Search() {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div>
      <h2>Search</h2>
      <div>
        {posts && posts.lenght === 0 && (
            <>
                <p>Não foram encontrados posts a partir da sua busca...</p>
                <Link to="/" className="btn btn-dark">
                    voltar
                </Link>
            </>
        )}

        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
}
