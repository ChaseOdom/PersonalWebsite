'use client'
import React, {useRef} from "react";
import Image, { StaticImageData } from 'next/image';
/*
import {GameCard} from "@/components/gamecard2";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import pulseTitle from "../gamecontent/pulse/title.png";
import pulse1 from "../gamecontent/pulse/monster.png";
import pulse2 from "../gamecontent/pulse/minimap.png";
import pulse3 from "../gamecontent/pulse/gameplay.png";
import cowTitle from "../gamecontent/cca/title.png";
import cabinTitle from "../gamecontent/Dreadwood/title.png";
import spanTitle from "../gamecontent/AttentionSpan/title.png";
import styles from '@/components/App.module.css';

interface mainCardStruct {
    description: string;
    gameImgs: StaticImageData[];
}
*/
export default function App() {
    /*
    const [selectedCard, setSelectedCard] = React.useState(0);

    function cardSelected(index: number){
        setSelectedCard(index);
    }

    function leftCardButtonPressed(){
        var diff =  -1;
        var newIndex = selectedCard + diff;
        if(newIndex < 0){
            newIndex = 0;
        }
        setSelectedCard(newIndex);
    }

    function rightCardButtonPressed(){
        var diff =  1;
        var newIndex = selectedCard + diff;
        if(newIndex >= GameCards.length){
            newIndex = GameCards.length - 1;
        }
        setSelectedCard(newIndex);
    }

    const MainCardVals: mainCardStruct[] = [
        {
            description: "hello",
            gameImgs: [pulseTitle, pulse1, pulse2, pulse3],
        }
    ]; 
    
    const GameCards = [
        <GameCard title="Pulse" description={"Award winning survival-horror game"} key="" cardImg={pulseTitle} index={0} selected={selectedCard == 0} cardClicked={cardSelected}></GameCard>,
        <GameCard title="Cosmic Cow Attack" description={"Cows vs. Aliens wave shooter"} key="" cardImg={cowTitle} index={1} selected={selectedCard == 1} cardClicked={cardSelected}></GameCard>,
        <GameCard title="Dreadwood Cabin" description={"Also Award winning puzzle game with horror"} key="" cardImg={cabinTitle} index={2} selected={selectedCard == 2} cardClicked={cardSelected}></GameCard>,
        <GameCard title="Attention Span" description={"Warioware meets tiktok brainrot!"} key="" cardImg={spanTitle} index={3} selected={selectedCard == 3} cardClicked={cardSelected}></GameCard>,
    ];

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row gap-4 w-full bg-slate-200 justify-center">
                <Image className="object-cover" src={MainCardVals[0].gameImgs[0]} alt="Stevon"/>
            </div>
            <div className="flex flex-row justify-center gap-4">
                <Button color="default" size="lg" radius="lg" isIconOnly={true} onPress={leftCardButtonPressed}>{'<'}</Button>
                {GameCards[0]}
                {GameCards[1]}
                {GameCards[2]}
                {GameCards[3]}
                <Button color="default" size="lg" radius="lg" isIconOnly={true} onPress={rightCardButtonPressed}>{'>'}</Button>
            </div>
        </div>
    );*/
    return (<div>Hello</div>);
}
