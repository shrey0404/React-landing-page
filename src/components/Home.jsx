import React from 'react'
import vg from "../assets/grap.png"
import Services from './Services'
import Contact from './Contact'
const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>The Modern Landing page for</h1>
                    <h2>React developers</h2>
                    <p>The easiest way to build a React landing page in seconds.</p>
                </main>
            </div>
            <div className='home2'>
                <img src={vg} alt='graphics'></img>
                <div>
                    <p>
                        "Welcome to the future of web development, where innovation meets simplicity. Our cutting-edge platform is designed exclusively for React developers who demand the best. Say goodbye to time-consuming setups and hello to a seamless, efficient development process. Whether you're a seasoned pro or just starting your journey with React, our tools and resources will empower you to build stunning, high-performance applications with ease. Join us today and experience the next evolution in React development – where your ideas come to life, beautifully."                    </p>
                </div>
            </div>

            <div className='home3' id='about'>
                <div>
                    <h1>Starter: Ignite Your React Journey!</h1>
                    <p>At Starter, we're on a mission to revolutionize the way React developers create web applications. React has transformed the web development landscape, and we believe it should be an accessible and empowering experience for everyone. Whether you're a seasoned professional or just embarking on your journey into the world of React, we're here to guide and support you every step of the way.

                        Our platform, aptly named 'Starter,' is designed to be your ultimate companion in the world of React development. With Starter, you can bid farewell to the complexities of setup and configuration, and say hello to a streamlined, efficient development process. We provide the essential tools, resources, and expert guidance you need to build stunning, high-performance applications with ease.

                        What sets us apart is our commitment to your growth as a developer. We offer a rich repository of tutorials, guides, and best practices to help you sharpen your skills and stay updated with the latest trends in the ever-evolving React ecosystem. Whether it's mastering component architecture, optimizing performance, or diving into cutting-edge libraries, we've got you covered.

                        Starter is more than just a platform; it's a community of like-minded developers and learners who are passionate about React. Share your ideas, collaborate on projects, and connect with fellow developers from around the world. It's a place to fuel your creativity, inspire your innovation, and make lasting connections in the field.</p>
                </div>
            </div>

            <Services />
            <Contact />
        </>
    )
}

export default Home;