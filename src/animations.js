

// header 
const HeaderVariant = {
    initial : {
        y: "-100%",
        opacity: 0,
        scale: 0,
    },
    animate : {
        y : 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}

// Hero section
const HeroSilderVariant = {
    initial: {
        opacity: 0, 
        scale: 0.4
    },
    view: {
        opacity: 1, 
        scale: 1,
        transition: {
            delay: 0.3,
            type: "tween"
        }
    }
}

const ContentVariant = {
    initial: {
        x: "-100%",
        opacity: 0
    },
    view: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            type: "tween"
        }
    }
}

const PrimaryTitlesVariant = {
    initial: {
        x: "-100%",
        opacity: 0,
    },
    view: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            type: 'tween',
        }
    }
}
const PrimaryVariant = {
    initial: {
        opacity: 0,
        scale: 0,

    },
    view: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1,
            duration: 0.3,
            type: 'tween',
            when: "afterChildren"
        }
    }
}

const SwipVariant = {
    animate: {
        x: 50,
        transition: {
            type: 'spring',
            repeat: Infinity,
            ease: "easeOut",
            duration: 1,
        }
    }
}

const FooterVariant= {
    initial: {
        y: "100%",
        opacity: 0,
    },
    view: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween"
        }
    }
}

export { 
    HeaderVariant, 
    HeroSilderVariant, 
    ContentVariant, 
    PrimaryTitlesVariant,
    PrimaryVariant,
    SwipVariant,
    FooterVariant
}