# Framer Motion For React: 

## setup & attributes :

### animate={} :
->1- instal framer motion : npm install framer-motion
->2- import framer in the Component : import { motion } from "framer-motion"
->3- added motion. to the elemnt :
```
<motion.h2 animate={anim}>welcome to chehiwaty</motion.h2> 
```

->4- added an object how contain the animation in this case our object is anim :
```
  const anim = {
    fontSize: "100px", 
    color: '#333',
    x: 100,
    y: -50,
  }
```
### initial={} :
-> the initial atrribute contain the initail state of animating an element and also initia attribute contain an object of animation prop with thier values :
-> here an exemple :
```
  const initial = {
    opacity: 0,
    x: '-100vw'
  }
  const animate = {
    opacity: 1,
    x: 0
  }
  <motion.h2 initial = {initial} animate={animate}>welcome to chehiwaty</motion.h2> 
```

### transition options :
-> this code to understand :
```
  const transition = {
    delay : 0.5,
    duration: 0.2,
    type: 'spring',//'tween'
    stiffness: 120, // from 0 to 500

  }
```

### hover :
```
const  whileHover = {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)" ,
    boxShadow:  "0px 0px 8px rgb(255, 255, 255)",
    originX: 10,
  }
```

### variant part 1 :
-> the variant it's an object who collect all the animation like initial and animate object for 
added it for more than one elemnt whitout repatin write the same animation 
->here is an exemple :
```
const contentVariant= {
    hidden : { // initial object
      opacity: 0,
      x: '-100vw'
    },
    visible: { // animate object
      opacity: 1,
      x: 0,
      transition: { // should be always intead of visible | animate object
        delay : 0.5,
        duration: 0.2,
        type: 'spring',//'tween'
        stiffness: 120, // from 0 to 500
        damping: 8, // how much of repeating
        staggerChildren: 2,//search about it

        when: "beforeChildren" | "afterChildren"// if the parent ele was nested by animated child elemnt
    
      }
    },  
  }
``` 

-> how to add a variant to an element :

```
  <motion.div variants={contentVariant} initial={"hidden"} animate={"visible"} className="content" >
    <motion.p variant={childvarianet}> </motion.p>
    </motion.div>
```

### keyframs()
-> the keyframscreate for creating animation like in  css from to or 0%{}50%{}100%
-> for createing animation in framer-motion we : property: [value1, value2, value3,....]
-> here is an exemple below : (we created animation for x & scale property)
```
  const buttonVariant = {
    animate: {
      x: [0, -20, 20, -20, 20, 0],
      transition: {
        delay: 2,
      }
    },
    hover: {
      scale: [1, 1.1, 1.2, 1.1, 1, 1.1, 1.2, 1.1, 1],
    }
  }

<motion.button variants={buttonVariant} animate={'animate'} whileHover={'hover'} className="primary">discover menu</motion.button>
```

### repat animation : 
-> instead of using keyframs you can let the propety values as there is and create a transition
into the main object and put the repeat: 10 | 30 | numberOfRepetition | infinity
->you can use use repeat or repeatType: 'reverse
```
  const buttonVariant = {
    animate: {
      x: -20,
      transition: {
        repeat: Infinity
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        repeat: Infinity //(keyframs)
      }
    }
  }
```

### animate presence 
-> first of all we created a state  & setTimeout that turn an h2 displayed none after 4000ms
-> second we import animationPresence how and i put the condition with the h2 into the          animatonPresence component
-> third we added ax exist={{}} atribut that contain the h2 animation when will be displayed none after 4000ms
-> here is an exemple below :
```
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function test() {
  const [ showTitle, setShowTitle] = useState(true)
  setTimeout(()=> {
    setShowTitle(false)
  }, 4000)

  return (
    <AnimatePresence>
      {showTitle && <motion.h2 exit={{y: "-100%", opacity: 0}} className="primary">welcomto chehiwaty</motion.h2>}
    </AnimatePresence>
  )
}

```