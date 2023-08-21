"use client"
import styles from "./home.module.css";

export default function Home() {
  const computerBeepPath = "/public/audio/sounds/computer_beep.wav";

  // useEffect(() => {
  //   let bootSound = new Audio(computerBeepPath);
  //   bootSound.play();

  //   return () => {
  //     bootSound.pause();
  //     bootSound.currentTime = 0;
  //   }
  // })

  return (
    <div className={styles["computer-container"]}>
      <div className={styles["inputs-panel"]}>
        <div className={`${styles["cd-drive"]} p-10`}>
          <div className={`${styles["cd-tray"]} p-5 rounded`}>
            <div className={styles["compact-disc-logo"]}></div>
          </div>
          <div className={`${styles["cd-btns"]} pt-5 pb-5 pl-1 pr-1`}>
            <div className={`${styles["aux"]} rounded-full`}></div>
            <div className={`${styles["cd-open-btn"]} rounded`}></div>
          </div>
        </div>
        <div className={styles["floppy-drive"]}></div>
      </div>
    </div>
  );
}
