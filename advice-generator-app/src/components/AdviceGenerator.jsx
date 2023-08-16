import { useEffect, useState } from "react"
import PatternDividerIcon from '../assets/images/pattern-divider-mobile.svg'

const AdviceGenerator = () => {

    const [advice, setAdvice] = useState({})

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
    }, [])
    
    return (
        <div className="bg-[#323a49] w-full flex flex-col justify-center items-center p-10 m-5 rounded-md gap-5 max-w-md">
            <h1 className="text-sm font-normal tracking-widest uppercase text-[#52ffa8]">Advice #{advice.id}</h1>
            <p className="text-[#cee3e9] text-center text-[28px]"><q>{advice.advice}</q></p>
            <div className="w-full">
            <img className="mx-auto" src={PatternDividerIcon} alt="pattern divider of line with pause icon"/>
            </div>
        </div>
    )
}

export default AdviceGenerator