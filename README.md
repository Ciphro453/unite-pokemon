# Pokemon Unite Database

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Technologies Used](#technologies-used)
6. [Data Sources](#data-sources)
7. [Usage](#usage)
   - [Home Page](#home-page)
   - [Pokémon Details](#pokémon-details)
   - [Tier List](#tier-list)
8. [Contributing](#contributing)
9. [License](#license)
10. [Acknowledgments](#acknowledgments)

## Introduction

Welcome to the Pokémon Unite Database! This project is a comprehensive website built using React and Tailwind CSS that provides an in-depth repository of information for all the Pokémon featured in the game Pokémon Unite. Whether you're a seasoned player or just getting started, this database will help you explore each Pokémon's moves, builds, and overall capabilities. Additionally, it offers a regularly updated tier list, which highlights the best-performing Pokémon in the current meta.

## Features

- Access detailed information about each Pokémon in Pokémon Unite, including their base stats, moves, and evolution lines.
- Explore recommended builds and strategies for each Pokémon, found using [Unite API](https://uniteapi.dev/).
- View an up-to-date tier list, which ranks Pokémon based on their performance and viability in the current metagame.
- Search and filter Pokémon by their name.
- Responsive design for optimal user experience on desktop and mobile devices.
- User-friendly interface and intuitive navigation.

## Getting Started

### Prerequisites

Before running the Pokémon Unite Database locally, make sure you have the following installed on your system:

- Node.js (version 12.0 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

```
git clone git@github.com:hiramr97/unite-database.git
```

2. Navigate to the project directory:

```
cd unite-database
```

3. Install the required dependencies:

```
npm install
```

## Project Structure

The project follows a standard React application structure. Here's an overview of the main directories and files:

```
unite-database/
├── public/
│   ├── favicon.ico
├── src/
│   ├── assets/
│   │   └── data.json
│   │   └── ...
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Homepage.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pokemon.jsx
│   │   ├── TierList.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   ├── index.css
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Technologies Used

The Pokémon Unite Database is built using the following technologies:

- React: A popular JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- npm: Node Package Manager for installing and managing project dependencies.

## Data Sources

The project uses one main JSON files as data sources:

1. `data.json`: Contains information about each Pokémon, including their names, base stats, moves, and evolution details. This was build on it's own backend using Django Rest Framework but simplified into a JSON file due to price for hosting.

Please note that the data in these files may be periodically updated to reflect changes in the game's balance and meta.

## Usage

### Home Page

Upon launching the application, you will be greeted with the home page, where you can see an overview of all the Pokémon featured in the game.

### Pokémon Details

Clicking on a specific Pokémon card will take you to its detailed page. Here, you can find extensive information about the Pokémon, including its base stats, moves, and evolution lines. Additionally, users can view community-contributed builds and strategies for this Pokémon.

### Tier List

The tier list page showcases the current rankings of Pokémon based on their performance in the game. This valuable resource helps players identify the most powerful and viable Pokémon in the current meta.

## Contributing

We welcome contributions from the community to improve the Pokémon Unite Database. Whether it's fixing bugs, adding new features, or updating data, your contributions are highly appreciated.

To contribute, please follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch to your repository.
4. Create a pull request from your branch to the main repository.

Our team will review your changes, provide feedback if necessary, and merge them once approved.

## License

All licenses belong to The Pokémon Company and Nintendo.

## Acknowledgments

We would like to express our gratitude to all the contributors and supporters who helped make this project possible. Special thanks to the developers of React, Tailwind CSS, and npm for providing the tools and libraries that enabled us to build this database.

---

Thank you for choosing the Pokémon Unite Database! We hope this comprehensive resource enhances your gaming experience and helps you become a master in Pokémon Unite. If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request. Happy exploring and battling!
