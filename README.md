<h3 align="center">
  startUpPage <a href="https://torpschezov.github.io/startUpPage/">Startpage</a>
</h3>

<p align="center">
  <a href="https://github.com/pivoshenko/catppuccin-startpage/stargazers">
    <img src="https://img.shields.io/github/stars/aevstiel/electrocat?style=for-the-badge&logo=starship&color=a6e3a1&logoColor=D9E0EE&labelColor=302D41">
  </a>
  <a href="https://github.com/pivoshenko/catppuccin-startpage/issues">
    <img src="https://img.shields.io/github/issues/aevstiel/electrocat?style=for-the-badge&logo=gitbook&color=fab387&logoColor=D9E0EE&labelColor=302D41">
  </a>
  <a href="https://github.com/pivoshenko/catppuccin-startpage/contributors">
    <img src="https://img.shields.io/github/contributors/aevstiel/electrocat?style=for-the-badge&logo=github&color=f38ba8&logoColor=D9E0EE&labelColor=302D41">
  </a>
</p>

# 🪴 Overview

A minimalistic and customisable startpage featuring the [**Catppuccin palettes**](https://catppuccin.com/palette) and my own Lycia palette. Designed for both aesthetics and functionality, with seamless hosting on GitHub Pages. This is a fork of [Catppuccin Startpage](https://github.com/pivoshenko/catppuccin-startpage) startpage, which is based on [`dawn`](https://github.com/b-coimbra/dawn), which offers additional functionality. I have refined Pivoshenko's page to match my [`dotfiles`](https://github.com/aevstiel/amethyst); feel free to explore them as well.

## 🧠 Main Principles

- Minimalism in all aspects
- Consistency throughout the user interface and codebase
- Simplicity in design and configuration
- Unified style and reduced visual noise

## 🎨 Supported Palettes

- Latte
- Frappé
- Macchiato
- Mocha
- Lycia

## ⭐ Features

- Automatic theme switching based on system settings (light/dark mode)
- Customisable startpage / bookmarks manager
- Search bar with multiple engines
- Weather widget
- Clock widget with 12/24-hour format and multiple time zones support

# 🪵 Usage

1. Fork this repository and clone it
2. Optionally remove the `.github` directory, as it contains only PR templates, issue labels, etc., that are linked to this repository
3. Update [`userconfig.js`](userconfig.js):
   - Set the desired palette: `latte / frappe / macchiato / mocha`
   - Set your location for the weather widget
   - Update the number of tabs and their banners
   - Update bookmarks and quick links for those you use most

> [!TIP]
> You can find icons for your bookmarks using [`tabler-icons`](https://tabler.io/icons).
>
> To reduce icon loading times, you may install the icon [font](src/fonts) locally and activate the option `"localIcons": true` in the configuration to disable remote styles.

### As Homepage

- Click the menu button and select `Options/Preferences`
- Click the home panel
- Click the menu next to 'Homepage and new windows', choose to show custom URLs, and add your GitHub Pages link

### As New Tab

You can use different add-ons or extensions for this.

- If you use Firefox-based browsers: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search) and make sure to enable "Force links to open in the top frame (experimental)" in the extension's preferences page
- If you use Chromium-based browsers (Brave / Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia)

### 🔎 Search

The search dialogue allows you to display a search bar with various search engines defined in the configuration. To run search dialogue, simply press `s` and type your query.

To select search engine, simply prefix the query with the corresponding `!<id>`. By default, the defined search engines are:

- `!p`: PerplexityAI
- `!g`: Google
- `!d`: DuckDuckGo (default)

### ⏰ Clock

The startpage now features an enhanced clock component with:

- Support for 12-hour and 24-hour time formats
- Multiple clocks for different time zones
- Customisable formatting options
- Locale support for regional time display

You can configure the clock format and add additional time zones in your `userconfig.js`:

```javascript
clock: {
  format: "h:i", // 24-hour format
  icon_color: palette.maroon,
},
// Optional: Add multiple clocks for different time zones
additionalClocks: [
  {
    label: "NYC", // Label for the clock
    timezone: "America/New_York", // IANA timezone name (handles DST automatically)
    format: "k:i p", // 12-hour format with leading zero (09:30 PM)
    locale: "en-US", // Locale for date/time formatting
    icon_color: palette.blue // Optional different icon color
  }
],
```

For full documentation of clock format options, [see](docs/CLOCK.md).

## 🖼️ Available Banners

| banner_01                                           | banner_02                                           | banner_03                                           | banner_04                                           |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| <img src="src/img/banners/banner_01.gif" width=175> | <img src="src/img/banners/banner_02.gif" width=175> | <img src="src/img/banners/banner_03.gif" width=175> | <img src="src/img/banners/banner_04.gif" width=175> |

| banner_05                                           | banner_06                                           | banner_07                                           | banner_08                                           |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| <img src="src/img/banners/banner_05.gif" width=175> | <img src="src/img/banners/banner_06.gif" width=175> | <img src="src/img/banners/banner_07.gif" width=175> | <img src="src/img/banners/banner_08.gif" width=175> |

| banner_09                                           | banner_10                                           | banner_11                                           | banner_12                                           |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| <img src="src/img/banners/banner_09.gif" width=175> | <img src="src/img/banners/banner_10.gif" width=175> | <img src="src/img/banners/banner_11.gif" width=175> | <img src="src/img/banners/banner_12.gif" width=175> |

| banner_13                                           | banner_14                                           | banner_15                                           | banner_16                                           |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| <img src="src/img/banners/banner_13.gif" width=175> | <img src="src/img/banners/banner_14.gif" width=175> | <img src="src/img/banners/banner_15.gif" width=175> | <img src="src/img/banners/banner_16.gif" width=175> |

| banner_17                                           | banner_18                                           |
| --------------------------------------------------- | --------------------------------------------------- |
| <img src="src/img/banners/banner_17.gif" width=175> | <img src="src/img/banners/banner_18.gif" width=175> |

# 🇺🇦 A Word

This startpage was made by a Ukranian, and nothing, even software, is free from politics.
I'd like to show my support for Ukraine against Russia's brutal invasion and war crimes in this beautiful country.
I know I can't make a big difference, but everything counts, so please consider donating to the [President's Intiative](https://u24.gov.ua/) and the [International Legion](https://ildu-support.kittysoloma.org/en/). Thank you, and slava Ukraini.
