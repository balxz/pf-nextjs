import Head from 'next/head'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faSpinner, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.loding').style.display = 'none'
      document.querySelector('.iframe-container iframe').style.display = 'block'
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <Head>
        <title>balxzzt | Spotify Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://nyimpen.vercel.app/component/spotfy.css" />
      </Head>
      <div className="container">
        <header>
          <img src="https://nyimpen.vercel.app/component/logoku.png" alt="Profile Picture" className="profile-pic" />
          <h1 className="nama">balxzzy</h1>
          <p className="lokasi">
            <FontAwesomeIcon icon={faGlobeAsia} /> Kalimantan Timur, Samarinda
          </p>
          <p className="bio">”destroyer.”</p>
        </header>

        <section className="spotify-section">
          <h2>The Playlist I Listen To</h2>
          <div className="iframe-container">
            <div className="loding">
              <FontAwesomeIcon icon={faSpinner} spin />
            </div>
            <iframe
              src="https://open.spotify.com/embed/playlist/6e5psrTK5oyi4xFRCk4MRx"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              style={{ display: 'none' }}
            ></iframe>
          </div>
        </section>

        <div className="social-icons">
          <a href="https://github.com/balxz" target="_blank" className="social-link" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://wa.me/6281276400345?text=hi+balxzzy" target="_blank" className="social-link" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://instagram.com/iqstore78" target="_blank" className="social-link" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://api.balxzzy.xyz" target="_blank" className="social-link" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </>
  )
}