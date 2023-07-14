import React from 'react';
import CodeReview from '../CodeReview/CodeReview';
import img1 from './images/1st.png';
import img2 from './images/2nd.png';
import img3 from './images/3rd.png';
import './Home.css';


const Home = () => {
    return (
        <div>
            <header>
                <nav id="nav"  className='nav'>
                    <div className=" navbar">
                        <div>
                            <h1>{`<CodeReview/>`}</h1>
                        </div>

                        <div className='navsec'>
                            <ul>
                                <li><a href="#features">Benifits</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>

            <section id="hero"  className='herosec'>
                <div className="container">
                    <h2  className='heading'> Your Ultimate Code Review Companion!</h2>
                    <p>Enhance your coding journey with our cutting-edge code review web app. Whether you're a seasoned developer or just starting out, our platform is designed to streamline the code review process and elevate the quality of your software projects.</p>
                    <a href="#CodeReview" class="cta-btn">Review your code</a>
                </div>
            </section>

            <section id="features">
                <h1>Key Benifits</h1>
                <div class="container featurewrap">

                    <div class="feature">
                        <img src={img1} alt="Benifit 1" />
                        <h4>Improved Code Quality</h4>
                        <p> Automated code reviews,
enabling developers to receive feedback on their code submissions. By</p>
                    </div>
                    <div class="feature">
                        <img src={img2} alt="Benifit 2" />
                        <h4>Consistent in code reviews</h4>
                        <p> Applies consistent standards
and  eliminating subjective variations that may
occur in manual reviews. </p>
                    </div>
                    <div class="feature">
                        <img src={img3} alt="Benifit 3" />
                        <h4>Time and Resourse saving</h4>
                        <p> Automating code reviews with the web app significantly
reduces the time and effort required for reviewing code, allowing developers.</p>
                    </div>
                </div>
            </section>



            <div className='code' id='CodeReview'>
                <CodeReview />
            </div>

            <footer  id='contact'>
                <div class="container">
                    <p>&copy; 2023 {`<CodeReview/>`}. All rights reserved.</p>
                </div>
            </footer>
            
        </div>
    )
}

export default Home