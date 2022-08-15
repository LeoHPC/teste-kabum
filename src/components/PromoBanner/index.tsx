// NEXT
import Image from "next/image";

// REACT
import { useEffect, useState } from "react";

// IMAGES
import Clock from "../../../public/icons/clock.svg";

// STYLES
import { Container } from "./styles";

export function PromoBanner() {
  const [seconds, setSeconds] = useState(56);
  const [minutes, setMinutes] = useState(15);
  const [hours, setHours] = useState(18);
  const [days, setDays] = useState(13);

  var timer: NodeJS.Timer;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        return;
      } else {
        setSeconds(seconds - 1);
      }

      if (hours === 0 && minutes === 0 && seconds === 0) {
        if (days !== 0) {
          setDays(days - 1);
          setHours(59);
        }
      }

      if (minutes === 0 && seconds === 0) {
        if (hours !== 0) {
          setHours(hours - 1);
          setMinutes(59);
        }
      }

      if (seconds === 0) {
        if (minutes - 1 !== -1) {
          setMinutes(minutes - 1);
        } else {
          setMinutes(59);
        }
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  })

  return (
    <Container>
      <h1>black friday</h1>
      <div>
        <span>a promoção termina em:</span>
        <Image src={Clock} alt="Desenho de um relógio" width={22} height={24} />
        <h1>
          {days < 10 ? "0" + days : days}d
        </h1>
        <h1>
          {hours < 10 ? "0" + hours : hours}:
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h1>
      </div>
    </Container>
  )
}