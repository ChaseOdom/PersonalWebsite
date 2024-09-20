'use client'
import React, {useRef} from "react";
import Image, { StaticImageData } from 'next/image';

import {GameCard} from "@/components/gamecard2";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";

import spanTitle from "@/components/pictures/atitle.png";
import pulseTitle from "@/components/pictures/ptitle.png";
import pulse1 from "@/components/pictures/pmonster.png";
import pulse2 from "@/components/pictures/pgameplay.png";
import pulse3 from "@/components/pictures/pminimap.png";
import cowTitle from "@/components/pictures/ctitle.png";
import cabinTitle from "@/components/pictures/dtitle.png";
import styles from '@/components/App.module.css';
import { MainCard } from "@/components/MainCard";
import { useState, useEffect } from 'react';

interface mainCardStruct {
    title: string;
    description: string;
    gameImgs: StaticImageData[];
}

export default function App() {

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
            title: "PULSE",
            description: "hello",
            gameImgs: [pulseTitle, pulse1, pulse2, pulse3],
        }
    ]; 
    const MainCards = [
        <MainCard title="PULSE" description={"Pulse will have you navigating someone through a maze. You have to get them out fast. There's a monster on the loose in the maze! This survival game was the first where me and my friends really won big. We got 2nd in the Chellinium game jam and won a little over $1,000. It's very hard to win and has a great jumpscare if you get caught. In this game I made the character and monster AI."} gameURL="https://redsyi.itch.io/pulse" cardImgs={[pulseTitle]} key=""></MainCard>,
        <MainCard title="COSMIC COW ATTACK" description={"A fun flip of the aliens abducting cows trope. This game will have you building towers to defend the cows that you've collected from being liberated by their bovine friends. In this game I programmed the laser and cow AIs. I also made the central orb that had chaos destuction, cows spinning in it, and electricity coursing though it."} gameURL="https://redsyi.itch.io/cosmic-cows-attack" cardImgs={[cowTitle]} key=""></MainCard>,
        <MainCard title="DREADWOOD CABIN" description={"Dreadwood Cabin has one of the best, spookiest vibes of all of my games. In this game you're given a set of rules about the state of the room before you proceed to the next room. The rules change and get increasingly more complex. I made the wiring minigame, monster jumpscare, dog petting minigame, and torch on/off minigame."} gameURL="https://redsyi.itch.io/dreadwood-cabin" cardImgs={[cabinTitle]} key=""></MainCard>,
        <MainCard title="ATTENTION SPAN" description={"Brainrot! This game is wario-ware meets tiktok. Complete mini-games to get points and clear that phone. If you have all 4 phones up and time runs out the game ends. For this game I made the narrative tutorial, the phone/camera system, and the meta gameflow including difficulty scaling."} gameURL="https://redsyi.itch.io/attention-span" cardImgs={[spanTitle]} key=""></MainCard>,
    ]

    const GameCards = [
        <GameCard title="Pulse" description="Award winning survival-horror game" key="" cardImg={pulseTitle} index={0} selected={selectedCard == 0} cardClicked={cardSelected}></GameCard>,
        <GameCard title="Cows" description="Cows vs. Aliens wave shooter" key="" cardImg={cowTitle} index={1} selected={selectedCard == 1} cardClicked={cardSelected}></GameCard>,
        <GameCard title="Cabin" description="Also Award winning puzzle game with horror" key="" cardImg={cabinTitle} index={2} selected={selectedCard == 2} cardClicked={cardSelected}></GameCard>,
        <GameCard title="Rot" description="Warioware meets tiktok brainrot!" key="" cardImg={spanTitle} index={3} selected={selectedCard == 3} cardClicked={cardSelected}></GameCard>,
    ];

    return (
        <div>
            <div className="flex justify-center items-center pb-5">
                {MainCards[selectedCard]}
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
                <Button color="default" size="lg" radius="lg" className="text-3xl" isIconOnly={true} onPress={leftCardButtonPressed}>{'<'}</Button>
                {GameCards[0]}
                {GameCards[1]}
                {GameCards[2]}
                {GameCards[3]}
                <Button color="default" size="lg" radius="lg" className="text-3xl" isIconOnly={true} onPress={rightCardButtonPressed}>{'>'}</Button>
            </div>
        </div>
    );
}
