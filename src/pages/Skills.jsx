import React, { Component } from 'react'
import {useSpring, animated} from 'react-spring'

function Skills(){
    const props = useSpring({ scroll: 100, from: { scroll: 0 } })
    return <animated.h1 scrollTop={props.scroll}>
           My Skills
        </animated.h1>
    }

export default Skills
