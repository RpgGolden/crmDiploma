import React from "react";
import Header from "../../components/Header/Header";
import HeadMenu from "../../components/HeadMenu/HeadMenu";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header name={"Имя Регистратора"} />
      <Outlet />
    </div>
  );
}

export default HomePage;
