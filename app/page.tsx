'use client'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, titleRight, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  function pressedCard(cardPressed: string){
    router.push('/' + cardPressed);
  }

  return (
    <section className="grid grid-cols-4 gap-4">
      <Card className="col-span-3 p-8" isPressable={true} onPress={()=>pressedCard("resume")}>
        <h1 className={title({color: "blue"})}>Resume</h1>
        <p>Very cool stuff happening on that pdf. Check it out and hire me!</p>
      </Card>
      <div></div>
      <div></div>
      <Card className="col-span-3 p-8" isPressable={true} onPress={()=>pressedCard("games")}>
        <h1 className={titleRight({color: "yellow"})}>Games</h1>
        <p>I make a bunch of games. Take a look!</p>
      </Card>
      <Card className="col-span-3 p-8" isPressable={true} onPress={()=>pressedCard("aboutme")}>
        <h1 className={title({color: "pink"})}>About Me</h1>
        <p>
          Learn more about my hobbies and stuff
        </p>
      </Card>
    </section>
  );
}
