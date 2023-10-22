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

            <div className='homepage3'>
                <div>
                    <h1>Starter: Ignite Your React Journey!</h1>
                    <p>At Starter, we're on a mission to revolutionize the way React developers create web applications. React has transformed the web development landscape, and we believe it should be an accessible and empowering experience for everyone. Whether you're a seasoned professional or just embarking on your journey into the world of React, we're here to guide and support you every step of the way.

                        Our platform, aptly named 'Starter,' is designed to be your ultimate companion in the world of React development. With Starter, you can bid farewell to the complexities of setup and configuration, and say hello to a streamlined, efficient development process. We provide the essential tools, resources, and expert guidance you need to build stunning, high-performance applications with ease.

                        What sets us apart is our commitment to your growth as a developer. We offer a rich repository of tutorials, guides, and best practices to help you sharpen your skills and stay updated with the latest trends in the ever-evolving React ecosystem. Whether it's mastering component architecture, optimizing performance, or diving into cutting-edge libraries, we've got you covered.

                        Starter is more than just a platform; it's a community of like-minded developers and learners who are passionate about React. Share your ideas, collaborate on projects, and connect with fellow developers from around the world. It's a place to fuel your creativity, inspire your innovation, and make lasting connections in the field.</p>
                </div>
            </div>
        </>
    )
}

export default Home