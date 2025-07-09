// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato, lycia
const preferredLightTheme = lycia;
const preferredDarkTheme = lycia;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Philadelphia",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "PHL",
      timezone: "Eastern",
      format: "h:i",
      icon_color: palette.mauve,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://github.com/torpschezov",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "torps",
      background_url: "src/img/banners/Aurora1crop.jpg",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "Wikipedia",
              url: "https://en.wikipedia.org/wiki/Main_Page",
              icon: "brand-wikipedia",
              icon_color: palette.red,
            },
            {
              name: "Ebay",
              url: "https://www.ebay.com/",
              icon: "letter-e-small",
              icon_color: palette.mauve,
            },
            {
              name: "Lyra",
              url: "https:///lyra.it.com/",
              icon: "flare",
              icon_color: palette.flamingo,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "Emory Canvas",
              url: "https://canvas.emory.edu/",
              icon: "brand-vsco",
              icon_color: palette.mauve,
            },
            {
              name: "Docs",
              url: "https://docs.google.com/",
              icon: "file-text",
              icon_color: palette.flamingo,
            },
            {
              name: "Drive",
              url: "https://drive.google.com/drive/u/0/",
              icon: "brand-google-drive",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "Youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Discord",
              url: "https://discord.com/channels/@me",
              icon: "brand-discord",
              icon_color: palette.mauve,
            },
            {
              name: "Finance",
              url: "https://liveuamap.com/",
              icon: "chart-dots-2",
              icon_color: palette.flamingo,
            },
            {
              name: "LiveUAMap",
              url: "https://grnt.media",
              icon: "swords",
              icon_color: palette.lavender,
            },
            {
              name: "Translate",
              url: "https://translate.google.com",
              icon: "language-katakana",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/mountain.jpg",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "Github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.red,
            },
            {
              name: "ChatGPT",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.mauve,
            },
            {
              name: "Stack Overflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.flamingo,
            },
          ],
        },
        {
          name: "OSINT",
          links: [
            {
              name: "Osint Framework",
              url: "https://osintframework.com/",
              icon: "binoculars",
              icon_color: palette.red,
            },
            {
              name: "Wigle",
              url: "https://wigle.net/",
              icon: "wifi",
              icon_color: palette.mauve,
            },
            {
              name: "Yandex",
              url: "https://yandex.com/",
              icon: "brand-yandex",
              icon_color: palette.flamingo,
            },
            {
              name: "Shodan",
              url: "https://www.shodan.io/",
              icon: "letter-s",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "Arch Wiki",
              url: "https://wiki.archlinux.org/title/Main_page",
              icon: "navigation-search",
              icon_color: palette.red,
            },
            {
              name: "Hacker News",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.mauve,
            },
            {
              name: "Apple Wiki",
              url: "https://theapplewiki.com/wiki",
              icon: "brand-apple",
              icon_color: palette.lavender,
            },
            {
              name: "Champagne",
              url: "https://champagne.pages.dev",
              icon: "skull",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "stuff",
      background_url: "src/img/banners/lycia-1.jpg",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "Instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.red,
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.mauve,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.flamingo,
            },
            {
              name: "Dread",
              url: "https://www.reddit.com/r/unixporn",
              icon: "shield-checkered",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.red,
            },
            {
              name: "Steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.mauve,
            },
            {
              name: "Epic Games",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.flamingo,
            },
            {
              name: "Nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "multimedia",
          links: [
            {
              name: "1Shows",
              url: "https://www.1shows.live",
              icon: "brand-funimation",
              icon_color: palette.red,
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.mauve,
            },
            {
              name: "Genesis",
              url: "https://libgen.st/",
              icon: "book",
              icon_color: palette.flamingo,
            },
            {
              name: "Anker",
              url: "https://ankergames.net",
              icon: "device-gamepad-2",
              icon_color: palette.lavender,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.red);
