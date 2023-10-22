import React from 'react'
import "../styles/Home.scss"
import vg from "../assets/grap.png"

const Home = () => {
  return (
    <>
     <div className='homepage'>
        <main>
            <h1>The Modern Landing page for</h1>
            <h2>React developers</h2>
            <p>The easiest way to build a React landing page in seconds.</p>
        </main>
    </div>
    <div className='homepage2'>
        <img src={vg} alt='graphics'></img>
        <div>
            <p>
            "Welcome to the future of React development. Our platform streamlines your workflow, offering React developers a seamless and efficient experience. Whether you're a pro or just getting started, we're here to empower you to create stunning, high-performance applications effortlessly. Join us today and redefine your React development journey."
            </p>
        </div>
    </div>
    </>
  )
}

export default Home