import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    initialFollowingState: true,
  },
  {
    userName: "pheralb",
    name: "Pablo Hernández",
    initialFollowingState: false,
  },
  {
    userName: "d4nidev",
    name: "Daniel de la Cruz",
    initialFollowingState: true,
  },
];
export function App() {
  return (
    <section className="App">
      <h1 className="tw-colorh1">Lista de usuarios</h1>
      {users.map(({ userName, name, isFollowing }) => 
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialFollowingState={isFollowing}
          >
            {name}
          </TwitterFollowCard>
      )}
    </section>
  );
}
