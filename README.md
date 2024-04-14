# Offline Unsplash

An app that that uses the Unsplash public API to search and display images based on a keyword given as a search, using VueJS and NuxtJS, with pagination features and a detailed view for each image.

Checkout the live demo [here](https://offline-unsplash.vercel.app/).

## Before you start

You will need to have an Unsplash account to get an access key. You can create one [here](https://unsplash.com/developers).

## Configuration

To develop the app, please first clone the project to your local environment. 

```bash
git clone https://github.com/itIsJim/offline-unsplash.git
```

Then, navigate to the project's root directory and create a `.env` file with the following content:

```
# .env
UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_ACCESS_KEY
```
**make sure to replace `YOUR_UNSPLASH_ACCESS_KEY` with your own Unsplash access key. It should look like `UNSPLASH_ACCESS_KEY=qwuhi123.....`**


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

