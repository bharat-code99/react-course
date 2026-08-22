import { storage } from "./services/storage";

export default function App() {
  const user = {
    name: "Bharat",
    role: "dev",
    code: 37909,
  };

  storage.set("user", user);

  const userData = storage.get("user");
  console.log(userData.name, userData.role, userData.code);

  storage.remove("user");

  return <div>App</div>;
}
