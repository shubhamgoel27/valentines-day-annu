// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Annu",

    pageTitle: "For Annu, With Love (and WiFi lag) 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻', '✈️', '🌍', '✨']
    },

    questions: {
        first: {
            text: "Annu, do you like me? (Think carefully, we're already married 😏)",
            yesBtn: "Obviously 🙄💕",
            noBtn: "No",
            secretAnswer: "I don't like you... I love you! Through 12,000 km, 3 years of video calls, and questionable timezone math ❤️"
        },
        second: {
            text: "How much do you love me? (Remember I survived on dal chawal while you had ghar ka khana 😤)",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine again on Feb 14th, 2026? (You can't say no, you moved continents for me 🌍✈️)",
            yesBtn: "Fine, Yes! 🙄💝",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "WOOOOW that's more than the miles between us times infinity!! 🥰🚀💸💝",
        high: "More than our phone bills during long distance! 🚀💝",
        normal: "More than the number of 'just 5 more minutes' on our calls! 🥰"
    },

    celebration: {
        title: "Yay! 5 years, 2 countries, 1 wedding, and still going! 🎉💝💍",
        message: "You left your job, crossed an ocean, and still put up with me — now come here for your hug, you deserve it! 🤗💋",
        emojis: "🎁💖🤗💝💋❤️💕✈️🇮🇳🇺🇸💍"
    },

    colors: {
        backgroundStart: "#ee9ca7",
        backgroundEnd: "#ffdde1",
        buttonBackground: "#e84393",
        buttonHover: "#fd79a8",
        textColor: "#d63031"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 