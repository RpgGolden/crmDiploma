import React from "react";
import Header from "../../components/Header/Header";
import HeadMenu from "../../components/HeadMenu/HeadMenu";
import TableRegistrar from "../../components/TableRegistrar/TableRegistrar";

function HomePage() {
  return (
    <div>
      <Header name={"Имя Регистратора"} />
      <HeadMenu />
      <TableRegistrar />
    </div>
  );
}

export default HomePage;
