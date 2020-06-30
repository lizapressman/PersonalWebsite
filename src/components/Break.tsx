
import * as React from 'react'

interface BreakProps {
  num: string;
  src: string;
}

export const Break: React.FunctionComponent<BreakProps> = ({ num, src }) => {
  return (
    <div id={num} style={{ "backgroundImage": `url(${src})` }}></div>
  )
}
