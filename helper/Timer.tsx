import { useEffect, useState } from 'react'

const Timer = (props: any) => {
  const { initialMinute = 0, initialSeconds = 0, setActive } = props
  const [minutes, setMinutes] = useState(initialMinute)
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
          setActive(false)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <span className="text-red-600 ">
      {minutes === 0 && seconds === 0 ? null : (
        <>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </>
      )}
    </span>
  )
}

export default Timer
