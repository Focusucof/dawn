const CONFIG = new Config({
  crypto: {
    coin: 'BTC',
    currency: 'USD',
    refreshIn: 10
  },
  temperature: {
    location: 'Toronto, Canada',
    scale: 'C'
  },
  clock: 'h:i p',
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  disabled: ['todo-list'],
  tabs: [
    {
      name: 'Focus',
      background_url: 'src/img/banners/sakura.png',
      categories: [{
        name: 'media',
        links: [
          {
            name: '',
            url: 'https://www.youtube.com',
            icon: 'brand-youtube',
            icon_color: '#ff6e6e'
          },
          {
            name: '',
            url: 'https://twitch.tv/',
            icon: 'brand-twitch',
            icon_color: '#b67aff'
          },
          {
            name: '',
            url: 'https://open.spotify.com/',
            icon: 'brand-spotify',
            icon_color: '#38ff95'
          },
          {
            name: '',
            url: 'https://netflix.com',
            icon: 'brand-netflix',
            icon_color: '#ff6e6e'
          },
          {
            name: '',
            url: 'https://disneyplus.com',
            icon: 'device-tv',
            icon_color: '#6e7dff'
          },
          {
            name: '',
            url: 'https://beta.crunchyroll.com/',
            icon: 'circle',
            icon_color: '#ff956e'
          }
        ]
      },
      {
        name: 'Social',
        links: [
          {
            name: '',
            url: 'https://twitter.com',
            icon: 'brand-twitter',
            icon_color: '#0bc1e9'
          },
          {
            name: '',
            url: 'https://www.instagram.com/',
            icon: 'brand-instagram',
            icon_color: '#ffc29c'
          },
          {
            name: '',
            url: 'https://tiktok.com/',
            icon: 'brand-tiktok',
            icon_color: '#ff4f71'
          }
        ]
      },
      {
        name: 'Tech',
        links: [
          {
            name: '',
            url: 'https://github.com/',
            icon: 'brand-github',
            icon_color: '#fff'
          },
          {
            name: '',
            url: 'https://gmail.com',
            icon: 'mail',
            icon_color: '#ff6e6e'
          },
          {
            name: '',
            url: 'https://hackerone.com/',
            icon: 'prompt',
            icon_color: '#fff'
          }
        ]
      }
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/fence.jpg',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/your-name.jpg',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});
