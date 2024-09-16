import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Image, { StaticImageData } from 'next/image';
import styles from './App.module.css';

interface cardProps {
    title: string;
    description: string;
    selected: boolean;
    cardImg: StaticImageData;
    cardClicked: (message: number) => void;
    index: number;
}

export function MainCard(props: cardProps) {

    function HandlePressed(){
        props.cardClicked(props.index);
    }

    return(
        <Card className={props.selected ? styles.backgroundPressed : styles.backgroundUnpressed} isHoverable={true} isPressable={true} onPress={HandlePressed}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <p className={styles.test}>{props.title}</p>
                <small className="text-default-500">{props.description}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 place-items-baseline">
                <Image className="object-cover" src={props.cardImg} width={150} height={150}alt="Stevon"/>
            </CardBody>
        </Card>
);
}