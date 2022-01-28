import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <div className="inner">
                <Link href="about_me">
                    <a> About Me</a>
                </Link>
                <Link href="/">
                    <a> Blog </a>
                </Link>
                <Link href="shop">
                    <a> Shop </a>
                </Link>
                <Link href="gallery">
                    <a> Gallery </a>
                </Link>
                <Link href="https://nextcloud.streisand.ovh">
                    <a > Cloud Storage</a>
                </Link>
            </div>
        </header> 
        <div className="content">
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
        </div>
      <style jsx>{`
        li {
            list-style-type: none;
        }
        
        p {
            margin-top: 0px;
        }
        
        html {
            font-family: 'Inter UI', -apple-system, BlinkMacSystemFont, 
            "Roboto", "Segoe UI", Helvetica, Arial, sans-serif;
        }
        
        h2 {
            margin-top: 10px;
        
            margin: auto;
            font-size: 25px
        }
        
        header{
            margin: 0;
            border: 0;
            top: 0;
            width: 100%;
            padding: 10px;
            background-color: #252627;
            display: flex;
        }
        
        a{
            font-weight: bold;
            text-decoration: none;
            text-transform: none;
            color: inherit;
            padding-left: 10px;
            font-size: large;
        }
        
        .text {
            margin: 40px;
        }
        
        .inner{
            padding-top: 2px;
            padding-bottom: 2px;
            margin: auto;
            width:75%;
            align-content: center;
            text-align: center;
        
        }
        
        .content {
            padding-top: 30px;
            margin: auto;
            width: 50%;
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 25px 50px;
        }
        
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
    </div>
  )
}


