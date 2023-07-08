import { useState, useEffect } from "react";

const useOnlinests = () => {
  const [status, setstatus] = useState(true);
  window.addEventListener("offline", () => {
    setstatus(false);
  });
  window.addEventListener("online", () => {
    setstatus(true);
  });

  return status;
};

export default useOnlinests;
