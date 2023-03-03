import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Progress from "./components/Progress";

export default function Router(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // TODO Outlet ?
  return (
    <>
      {isLoading && <Progress />}
      {!isLoading && (
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      )}
    </>
  );
}
