import { useEffect } from "react"
import { useState } from "react"
import PatternDivider from '../assets/images/pattern-divider-mobile.svg'

const AdviceGenerator = () => {

    const [advice, setAdvice] = useState({})

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
    }, [])
    
    return (
        <div className="bg-[#4e5d73] w-full flex flex-col justify-center items-center p-5 m-5 rounded-md gap-5">
            <h1 className="text-sm font-normal tracking-widest uppercase text-[#52ffa8]">Advice #{advice.id}</h1>
            <p className="text-[#cee3e9] text-center text-[28px]"><q>{advice.advice}</q></p>
            <div className="flex justify-center items-center">
                <hr className="mx-0 self-stretch"/>
                <img className="m-w-sm" src={PatternDivider} alt="pattern divider" />
                <hr className="mx-0 self-stretch" />
            </div>
        </div>
    )
}

export default AdviceGenerator