import { useEffect } from "react";

const useDocTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Dev Hero`;
    console.log("called");
  }, []);
};

export default useDocTitle;
