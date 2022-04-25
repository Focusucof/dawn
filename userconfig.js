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
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
      gh: ['https://github.com/', 'GitHub']
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
          },
          {
            url: 'https://www.behance.net/',
            icon: 'brand-behance',
            icon_color: '#6e7dff'
          },
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
      name: 'val',
      background_url: 'src/img/banners/fence.jpg',
      categories: [
        {
          name: 'news',
          links: [
            {
              url: 'https://vlr.gg/',
              icon: 'tournament',
              name: 'vlr.gg',
              icon_color: '#ff6e6e'
            },
            {
              url: 'https://www.reddit.com/r/valorantcompetitive/',
              icon: 'brand-reddit',
              icon_color: '#ff956e',
              name: 'r/valorantcompetitive'
            },
            {
              url: 'https://playvalorant.com/en-us/news/',
              icon: 'news',
              icon_color: '#b67aff',
              name: 'playvalorant.com'
            }
          ]
        },
        {
          name: '',
          links: [
            
          ]
        }
      ]
    },
    {
      name: 'dev',
      background_url: 'src/img/banners/your-name.jpg',
      categories: [
        {
          name: 'Repositories',
          links: [
            {
              name: '',
              url: 'https://github.com/',
              icon: 'brand-github',
              icon_color: '#fff'
            },
            {
              name: '',
              url: 'https://hub.docker.com/',
              icon: 'brand-docker',
              icon_color: '#0bc1e9'
            }
          ]
        },
        {
          name: 'docs',
          links: [
            {
              name: '',
              url: 'https://developer.mozilla.org/en-US/',
              icon: 'browser',
              icon_color: '#fff'
            }
          ]
        },
        {
          name: 'localhost',
          links: [
            {
              name: '80',
              url: 'http://localhost/',
              icon: ''
            },
            {
              name: '3000',
              url: 'http://localhost:3000/',
            },
            {
              name: '8000',
              url: 'http://localhost:8000/',
            },
            {
              name: '1337',
              url: 'http://localhost:1337/',
            },
            {
              name: '8080',
              url: 'http://localhost:8080/',
            },
          ]
        }
      ]
    }]
});
