# Pokédex Next.js Application

This is a comprehensive [Next.js](https://nextjs.org) project created for [the Modern Full Stack Next.js Course](https://nextjscourse.dev/?utm_source=github).

A modern Pokédex web application built with Next.js that displays Pokémon information fetched from the [PokéAPI](https://pokeapi.co/).

## Features

- Display Pokémon cards with official artwork
- Show Pokémon types with color coding
- Search functionality to filter Pokémon by name
- Responsive design that works on desktop and mobile devices
- Server-side rendering for improved performance and SEO
- Learn important concepts like Debouncing and Treeshaking

## Technologies Used

- [Next.js 15](https://nextjs.org/) with App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [PokéAPI](https://pokeapi.co/) for Pokémon data

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app router files
- `components/` - React components
  - `pokemon-card.tsx` - Individual Pokémon card display
  - `pokemon-list.tsx` - Grid layout for Pokémon cards
  - `pokemon-wrapper.tsx` - Container with search functionality
  - `search-input.tsx` - Search input component
- `utils/` - Utility functions and type definitions

## Getting Started with this Repository

### Fork the Repository

Forking creates your own copy of this repository under your GitHub account, allowing you to:

- Make changes without affecting the original project
- Contribute back to the original project via pull requests
- Track the original repository for updates

To fork this repository:

1. Click the "Fork" button in the top-right corner of this GitHub repository
2. Select your GitHub account as the destination
3. Wait for GitHub to create your fork

### Clone Your Fork

After forking, clone your fork to your local machine:

```bash
# Replace YOUR-USERNAME with your GitHub username
git clone https://github.com/YOUR-USERNAME/hello-nextjs.git
cd hello-nextjs
```

### Install Dependencies

Install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run the Development Server

Start the development server as described in the Getting Started section above.

### Keeping Your Fork Updated

To keep your fork in sync with the original repository:

```bash
# Add the original repository as a remote called "upstream"
git remote add upstream https://github.com/ORIGINAL-OWNER/hello-nextjs.git

# Fetch changes from the upstream repository
git fetch upstream

# Merge changes from upstream into your local main branch
git checkout main
git merge upstream/main
```
