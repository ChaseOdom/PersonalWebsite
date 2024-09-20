import { title } from "@/components/primitives";
import { Card } from "@nextui-org/card";
import styles from './aboutmeStyles.module.css';


export default function AboutPage() {
  return (
    <div>
      <div className="flex w-full justify-center items-center space-x-2">
        <span className="text-2xl "> A few things</span>
        <span className={title({color:"pink"})}> ABOUT ME</span>
      </div>
    
      <div className="m-5 flex items-center">
        <div className="inline-block w-1/2 m-5">
          <p className={styles.paragraphFont}>I&apos;ve done every Escape Room at Escape Hour Austin.
            The christmas escape room had little cups so that you could self-serve hot cocoa. I&apos;d highly recommend going! </p>
        </div>
        <div className="flex w-1/2">
          <img src="/escape.JPG"></img>
        </div>
      </div>

      <div className="m-5 flex items-center">
        <video className="flex w-1/2" controls>
          <track default kind="captions" src="" />
          <source src="/piano2.mp4"></source>
        </video>
        <div className="inline-block w-1/2 space-x-5">
          <p className={styles.paragraphFont}> I used to play a lot of piano with sheet music, but I was never good at sight reading.
            In the last year or so I&apos;ve been getting into freestyling. Here&apos;s a video of me doing a little e minor jig.
            I especially like blues freestyles. </p>
        </div>
      </div>

      <div className="m-5 flex items-center">
        <div className="inline-block w-1/2 m-5">
          <p className={styles.paragraphFont}> I love hamsters! They&apos;re the best pet. In college I wanted a low maintenance pet, but found out I was allergic to cats! D:
            Hamsters are great workarounds! haha they&apos;re cuter than cats, but you can&apos;t play with them as much. So that&apos;s the compromise you run getting one.
          </p>
        </div>
        <div className="flex w-1/3">
          <img src="/hamster.jpg"></img>
        </div>
      </div>

      <div className="m-5 flex items-center">
        <div className="flex w-1/3">
          <img src="/Car.jpg"></img>
        </div>
        <div className="inline-block w-1/2 m-5">
          <p className={styles.paragraphFont}> I&apos;ve had 2 mustangs in my life My dad got my first when I was in highschool and it got me through college. It was a maroon 2006 coupe.
            I&apos;ve been using my 2017 gt convertible for about 4 years now and I&apos;m going to run it into the ground and never sell it.
            There&apos;s no other muscle car for me than a mustang!
          </p>
        </div>
      </div>

    </div>
  );
}

/*
    <div className="block h-full w-full fixed top-0 left-0">
      <Card className="h-full w-full justify-center items-center">
        <img src="/Car.jpg" className="h-10 w-10"></img>
      </Card>
    </div>
*/

/*
      <div className="m-5 flex items-center">
        <video className="flex w-1/3" controls>
          <source src="/piano2.MP4"></source>
        </video>
        <div className="inline-block w-1/2 space-x-5">
          <p className=" m-5"> I&apos;ve played Piano since I was about 10. I used to play a lot of sheet music, but I was never good at sight reading.
            In the last year or so I&apos;ve been getting into freestyling. Here&apos;s a video of me doing a little e minor diddy.
            I especially like blues freestyles. I have roots in New Orleans, so it's fun to have that connection mixed with something I like. </p>
        </div>
      </div>
*/