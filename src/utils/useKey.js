import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(() => {
    function callback(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }
    document.addEventListener("keydown", callback);
    return () => {
      // making the event listener execyted only once at a time
      document.removeEventListener("keydown", callback);
    };
  }, [key, action]);
}
