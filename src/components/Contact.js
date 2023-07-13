import { useContext, useState } from "react";
import userContext from "../utlis/usecontext";

const Person = (props) => {
  return (
    <div className="border border-black m-10 p-8 shadow-2xl">
      <h1 className="font-bold">{props.name}</h1>
      <button
        onClick={() => {
          if (props.title !== props.name) props.set(props.name);
          else props.set("");
        }}
        className="font-thin cursor-pointer bg-blue-300 rounded-md px-4"
      >
        {props.title === props.name ? "Hide" : "Show"}
      </button>
      {props.title === props.name && <p>{props.details}</p>}
    </div>
  );
};

const Contact = () => {
  const [title, setTitle] = useState("");
  const userdata = useContext(userContext);
  return (
    <div>
      <h1>
        {userdata.user.name}-{userdata.user.email}
      </h1>
      <Person
        title={title}
        set={setTitle}
        name="vijay"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Person
        title={title}
        set={setTitle}
        name="sri"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></Person>
      <Person
        title={title}
        set={setTitle}
        name="nish"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></Person>
      <Person
        title={title}
        set={setTitle}
        name="dar"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></Person>
      <Person
        title={title}
        set={setTitle}
        name="vino"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></Person>
    </div>
  );
};
export default Contact;
