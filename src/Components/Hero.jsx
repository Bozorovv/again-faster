import '../Styles/hero.css'
import modal from '../Image/modal.png'
import x from '../Image/X.svg'
import { useRef, useState } from 'react'

function Hero() {
    const mod = useRef()
    const mini = useRef()
    const [countdown, setCountdown] = useState(7)
    const countdownInterval = useRef(null)

    function openModal() {
        mod.current.classList.add("db")
        document.body.classList.add("no-scroll")
    }

    function closeModal() {
        mod.current.classList.remove("db")
        document.body.classList.remove("no-scroll")
    }

    function clos() {
        mod.current.classList.remove("db")
          alert("Succesfuly")
        mini.current.classList.add("on")
        document.body.classList.remove("no-scroll")
        setCountdown(10)

        countdownInterval.current = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(countdownInterval.current)
                    mini.current.classList.remove("on")
                    mini.current.classList.add("of")
                    return 0
                }
                return prev - 1
            })
        }, 1000)

    }

    function del() {
        clearInterval(countdownInterval.current) 
        mini.current.classList.add("of")
      
    }
   
    

    return (
        <>
            <div ref={mini} className="mini_modal">
                <button className='del' onClick={del}>X</button>
                <h6>
                    This site uses cookies to remember some of your preferences and to help us improve the site. Cookies are small text files that are download on your computer or device. By Continuing to use this site you agree to our use of cookies. You can find out more by reading our privacy policy.
                </h6>
                <p> {countdown}</p>
            </div>

            <div ref={mod} className="hero_modal">
                <div className="hero_modal_wrapper">
                    <div className="abd">
                        <img src={modal} alt="" />
                    </div>

                    <div className="modal_content">
                        <div className="asd">
                            <img className='u' onClick={closeModal} src={x} alt="" />
                        </div>

                        <h2>Newsletter</h2>
                        <h5>Get notified of deals and new products before anybody else!</h5>
                        <form >
                            <input type='email' placeholder='Email address' />
                        <button  onClick={clos}>Sign up</button>
                        </form>
                        
                    </div>
                </div>
            </div>

            <div className='hero'>
                <div className="container">
                    <div className="hero_wrapper">
                        <h1>Team barbell</h1>
                        <p>Team Barbell was to design a piece of equipment that matches the performance and quality of other elite level competition bars.</p>
                        <button onClick={openModal}>Explore <span>➞</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero