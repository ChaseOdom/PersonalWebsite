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
        <Card className="">
            <CardBody className="grid grid-cols-3 grid-rows-1">
                <Image className="col-span-2" src={props.cardImgs[0]} alt="Stevon"/>
                <div className="flex flex-col items-center w-full border-2 border-[#424242]">
                    <div className="flex border-b-1 border-[#424242] w-full justify-center">
                        <p className="text-2xl">{props.title}</p>
                    </div>
                    <p className="m-3">
                        {props.description}
                    </p>
                    <a href={props.gameURL} className="text-xl underline text-blue-500" target="_blank">Play the game here</a>
                </div>
            </CardBody>
        </Card>
);
}