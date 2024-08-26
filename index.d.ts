<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>balxzzt | Spotify Music</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://nyimpen.vercel.app/component/spotfy.css">
</head>
<body>
    <div class="container">
        <header>
            <img src="https://nyimpen.vercel.app/component/logoku.png" alt="Profile Picture" class="profile-pic">
            <h1 class="nama">balxzzy</h1>
            <p class="lokasi"><i class="fas fa-globe-asia"></i> Kalimantan Timur, Samarinda</p>
            <p class="bio">”destroyer.”</p>
        </header>

        <!-- tags Spotify Section -->
        <section class="spotify-section">
            <h2>The Playlist I Listen To</h2>
            <div class="iframe-container">
              
                <!-- tags animasi loading -->
                <div class="loding">
                    <i class="fas fa-spinner"></i>
                </div>
                <iframe src="https://open.spotify.com/embed/playlist/6e5psrTK5oyi4xFRCk4MRx" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </section>

        <div class="social-icons">
            <a href="https://github.com/balxz" target="_blank" class="social-link"><i class="fab fa-github"></i></a>
            <a href="https://wa.me/6281276400345?text=hi+balxzzy" target="_blank" class="social-link"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://instagram.com/iqstore78" target="_blank" class="social-link"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://api.balxzzy.xyz" target="_blank" class="social-link"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
    </div>

    <script>
        setTimeout(function() {
            document.querySelector('.loding').style.display = 'none'
            document.querySelector('.iframe-container iframe').style.display = 'block'
        }, 5000)
    </script>
</body>
</html>