import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
        <div className="about_me">
            <h2> About Me </h2>
            <p> Hello! My name is Daniel Zhou, coder by night and photographer by 
                daytime. This site will serve as my documentation / brain dump for 
                all the needlessly complex projects I embark on, as well as an outlet
                for corebooted devices and refurbished laptops. 
            </p>
        </div>
        <div className="hire_me"> 
            <h2> Hire Me  </h2>
            <p> Interested in hiring me? Check out the resume listed on the left 
            </p>
        </div>
        <div className="profile_picture">
            {/* <img src="pretty.JPG" alt=profile_picture width="500" height="300"> */}
        </div>
        <div className="resume">
                asdfasdfasdfasdf
        </div>
        <div className="socials">
            <h2> Contact Me </h2>
            <div className="icon_box">
                <a href="https://www.facebook.com/daniel.zhou.9212301/" 
                className="fa fa-facebook fa-10x"></a>
                <a href="https://www.instagram.com/packeteater/"
                className="fa fa-instagram fa-10x"></a>
                <a href="https://www.reddit.com/user/deathewillcome3"
                    className="fa fa-reddit fa-10x"></a>
                <a href="#" className="fa fa-google fa-10x"></a>
                <a href="https://www.linkedin.com/in/daniel-zhou-383625223/" 
                className="fa fa-linkedin fa-10x"></a>
            </div>
        </div>
      <style jsx>{`
        .hire_me {
            grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 2;
            grid-column-end: 4;
        }
        
        .profile_picture {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 3;
            grid-column-end: 4;
        }
        
        .about_me {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 1;
            grid-column-end: 3;
        }
        
        .resume {
            grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 1;
            grid-column-end: 2;
        }
        
        .socials{
            grid-row-start: 3;
            grid-row-end: 4;
            grid-column-start: 1;
            grid-column-end: 4;
        }
        
        .icon_box{
            padding-top: 10px;
            margin: auto;
            font-size: 50px;
            /* text-align: center; */
        }
        
        .fa{
            font-size: 100px;
        }
      `}</style>
    </Layout>

  )
}


