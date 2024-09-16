'use client'
import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import stevon from "@/components/pictures/ARR.png";
import Image from 'next/image';
import styles from './App.module.css';

export const GameCard = (title: string, ) => {
  const [cardPressed, setCardPressed] = React.useState(false);

  function HandlePressed(){
    setCardPressed(cardPressed => true);
  }

  return (
    <Card className={cardPressed ? styles.backgroundPressed : styles.backgroundUnpressed} isHoverable={true} isPressable={true} onPress={HandlePressed}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className={styles.test}>{title}</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image className="object-cover" src={stevon} width={150} height={150}alt="Stevon"/>
      </CardBody>
    </Card>
  );
}
