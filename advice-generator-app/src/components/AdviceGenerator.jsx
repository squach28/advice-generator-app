import { useEffect, useState } from "react"
import PatternDividerIcon from '../assets/images/pattern-divider-mobile.svg'
import DiceIcon from '../assets/images/icon-dice.svg'
const AdviceGenerator = () => {

    const [advice, setAdvice] = useState({})

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
    }, [])

    const generateNewAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
    }
    
    return (
        <div className="bg-[#323a49] w-full flex flex-col justify-center items-center p-10 pb-0 m-5 rounded-md gap-5 max-w-md">
            <h1 className="text-sm font-normal tracking-widest uppercase text-[#52ffa8]">Advice #{advice.id}</h1>
            <p className="text-[#cee3e9] text-center text-[28px]"><q>{advice.advice}</q></p>
            <img className="mx-auto w-full" src={PatternDividerIcon} alt="pattern divider of line with pause icon"/>
            <div className="top-[25px] relative rounded-full bg-[#52ffa8] cursor-pointer hover:shadow-[0_0_25px_3px_rgba(82,255,168,0.75)]" onClick={generateNewAdvice}>
                <img className="p-4" src={DiceIcon} alt="dice with value of five" />
            </div>
        </div>
    )
}

export default AdviceGenerator