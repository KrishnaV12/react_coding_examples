import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const Debounce = () => {
  const [query, setQuery] = useState("");

  const searchReasult = useDebounce(query, 400);

  useEffect(() => {
    if (searchReasult) {
    }
  }, [searchReasult]);

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Debounced Value: {searchReasult}</p>
    </div>
  );
};

export default Debounce;
