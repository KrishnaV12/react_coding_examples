import { useState, useTransition, useDeferredValue } from "react";

const useTransition = (rows) => {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState(rows);

  function onChange(e) {
    setQuery(e.target.value);
    startTransition(() => {
      setResults(filterExpensive(rows, e.target.value));
    });
  }

  return (
    <>
      <input value={query} onChange={onChange} aria-label="Search rows" />
      <div aria-busy={isPending}>
        <ResultList rows={results} />
      </div>
    </>
  );
};

export default useTransition;
