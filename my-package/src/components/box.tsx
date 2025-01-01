import { useRef } from "react"

export function Box() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      Hello World
    </div>
  )
}
