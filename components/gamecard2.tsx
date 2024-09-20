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

export function GameCard(props: cardProps) {

    function HandlePressed(){
        props.cardClicked(props.index);
    }

    return(
        <Card className={props.selected ? styles.backgroundPressed : styles.backgroundUnpressed} isHoverable={true} isPressable={true} onPress={HandlePressed}>
            <CardHeader className={styles.cardTitle}>
                <p className={styles.test}>{props.title}</p>
                
            </CardHeader>
            <CardBody className="flex items-center">
                <Image className="object-cover" src={props.cardImg} alt="Stevon"/>
            </CardBody>
        </Card>
);
}

//<small className="text-default-500">{props.description}</small>