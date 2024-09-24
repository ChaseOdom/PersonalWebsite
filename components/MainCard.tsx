import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Image, { StaticImageData } from 'next/image';
import styles from './App.module.css';

interface MainCardProps {
    title: string;
    description: string;
    cardImgs: StaticImageData[];
    gameURL: string;
}

export function MainCard(props: MainCardProps) {

    return(
        <Card className={styles.mainCard}>
            <CardBody className="grid grid-cols-1 grid-rows-5">
                <div className = "flex row-span-3 items-center justify-center">
                    <Image className={styles.mainCardPicture} src={props.cardImgs[0]} alt="Stevon"/>
                </div>
                <div className="flex flex-col row-span-2 items-center w-full border-2 border-[#424242] overflow-x-auto">
                    <div className="flex border-b-1 border-[#424242] w-full justify-center">
                        <p className="text-2xl">{props.title}</p>
                    </div>
                    <p className={styles.test}>
                        {props.description}
                    </p>
                    <a href={props.gameURL} className={styles.urlStyle} target="_blank">Play the game here</a>
                </div>
            </CardBody>
        </Card>
);
}