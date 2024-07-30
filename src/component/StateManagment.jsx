import React, { useState } from 'react'

function Panel({ title, children , isActive, show}) {
  // const [active, setActive] = useState(false);
  // const handelClick = () => {
  //   setActive(true);
  // }
  return (
    <div>
      <h3>{title}</h3>
      {isActive ? (<p>{children}</p>) : <button onClick={show}>show</button>}
    </div>
  )
}

function StateManagment() {
  const [activeIndex, setAtiveIndex] = useState(0);
  return (
    <div>
      <h1>Almaty, Kazakhstan</h1>
      <Panel 
      title="About"
      isActive={activeIndex === 0}
      // show = {}
      show = {() => setAtiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel 
      title="Etymology"
      isActive={activeIndex === 1}
      show = {() => setAtiveIndex(1)}
      >
      The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  )
}

export default StateManagment;