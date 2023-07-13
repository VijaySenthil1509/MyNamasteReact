import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "vijay",
    email: "name@gmail.com",
  },
});
export default userContext;
