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
    <div className={styles["room"]}>

      {/* Computer Case */}
      <div className={`${styles["computer-container"]} rounded-t`}>

        {/* All the inputs/drives */}
        <div className={styles["inputs-panel"]}>

          {/* Div at the top to simulate it coming out as a ridge and having some shadow */}
          <div className={`${styles["top-ridge"]} rounded-full`}></div>

          {/* CD drive slot */}
          <div className={`${styles["cd-drive"]} p-10 ${styles['slot']}`}>
            <div className={`${styles["cd-tray"]} p-5 rounded`}>
              <div className={styles["compact-disc-logo"]}></div>
            </div>
            <div className={`${styles["cd-btns"]} pt-5 pb-5 pl-1 pr-1`}>
              <div className={`${styles["aux"]} rounded-full`}></div>
              <div className={`${styles["cd-open-btn"]} rounded`}></div>
            </div>
          </div>

          {/* Floppy Disc Slot */}
          <div className={`${styles["floppy-drive"]} mt-10 p-7 ${styles['slot']}`}>
            <div className={`${styles["floppy-slot-fullw"]} ${styles['slim-slot']}`}>
              <div className={`${styles["floppy-slot-inner1"]} ${styles["floppy-slot-inner"]} ${styles['slim-slot']}`}>
                <div className={`${styles["floppy-slot-inner2"]} ${styles["floppy-slot-inner"]} ${styles['slim-slot']}`}></div>
              </div>
              <div className={`${styles["floppy-slot-inner-bottom"]} ${styles["floppy-slot-inner"]} ${styles['slim-slot']}`}>
                <div className={`${styles["floppy-bottom-inner"]}`}></div>
              </div>
              <div className={`${styles["cd-open-btn"]} rounded`}></div>
            </div>

            {/* Try to add a bit that is like a curved ridge in the case */}
            <div className={`${styles["floppy-ridge"]}`}></div>
          </div>
        </div>

        {/* Power Button */}
        <div className={`${styles['power-btn-container']}`}>
          <div className={`${styles['power-btn']}`}></div>
        </div>
      </div>
    </div>
  );
}
