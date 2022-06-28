import type { NextPage } from "next";

import ThemeSwitchSelect from "../components/ThemeSwitchSelect";
import ThemeSwitchButton from "../components/ThemeSwitchButton";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen gap-6 flex-col items-center justify-center">
      <h1 className="text-3xl">Theme Switch</h1>
      <div className="flex gap-6">
        <ThemeSwitchSelect />
        <ThemeSwitchButton />
      </div>
    </div>
  );
};

export default Home;
