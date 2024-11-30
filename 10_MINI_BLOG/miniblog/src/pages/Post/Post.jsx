import styles from "./Post.module.css";

import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post id:{id}</h1>
    </div>
  );
}
