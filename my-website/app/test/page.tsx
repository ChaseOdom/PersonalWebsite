'use client'
import React, {useRef} from "react";
import {GameCard} from "@/components/gamecard2";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import stevon from "@/components/pictures/ARR.png";
import pulseTitle from "../gamecontent/pulse/title.png";

export default function App() {
  const [selectedCard, setSelectedCard] = React.useState(-1);

  function cardSelected(index: number){
    setSelectedCard(index);
  }

  var a = <GameCard title="Pulse" description={"Award winning survival-horror game"} cardImg={pulseTitle} index={0} selected={selectedCard == 0} cardClicked={cardSelected}></GameCard>;
  var b = <GameCard title="Stonky" description={"hello"} cardImg={stevon} index={1} selected={selectedCard == 1} cardClicked={cardSelected}></GameCard>;

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Button color="default" size="lg" radius="lg" isIconOnly={true}>{'<'}</Button>
      {a}
      {b}
      <Button color="default" size="lg" radius="lg" isIconOnly={true}>{'>'}</Button>
    </div>
  );
}
