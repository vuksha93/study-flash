# Studyflash Hiring Challenge: Starting Point

## Intro

Welcome! Use this repo as the starting point for your submission to the **Studyflash** mobile developer hiring challenge. You’ll build a simple streaming AI chatbot that mimics the look and feel of **ChatGPT**

---

## Getting started

* **pnpm** installed
* Gemini API key (provided as part of the challenge)

Create `.env.local` in the project root:

```bash
GOOGLE_GENERATIVE_AI_API_KEY=provided_key_here
```

---

## Running in Expo 

1. Install deps:

   ```bash
   pnpm install
   ```
2. Start the dev server:

   ```bash
   pnpm expo
   ```
3. Open the app:

   * **iOS Simulator:** press `i` in the terminal.
   * **Real device:** install **Expo Go**, scan the QR code.


---

## Core commands

```bash
# install
pnpm install

# start (Expo Go)
pnpm expo

# clear cache (if needed)
pnpm expo start -c
```

---

## Key files to work on

* **Primary (chat UI):** `app/(tabs)/index.tsx`
  *This is the main file to implement your chat experience.*
* **API route (streaming/tools example):** `app/api/chat+api.ts`
---

## Development build (optional)

If you need more than Expo Go (e.g., native modules or a custom dev client):

* Use the prepared branch:

  ```bash
  git checkout native-development-build
  ```
* Or create your own dev client:

  ```bash
  pnpm expo run:ios  
  pnpm expo start 
  ```

