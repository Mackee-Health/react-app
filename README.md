This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### NextJS

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

---

### Capacitor

Capacitor is a cross-platform API and code execution layer that makes it easy to call Native SDKs from web code and to write custom native plugins that your app may need. Additionally, Capacitor provides first-class Progressive Web App support so you can write one app and deploy it to the app stores _and_ the mobile web.

Capacitor comes with a Plugin API for building native plugins. Plugins can be written inside Capacitor apps or packaged into an npm dependency for community use. Plugin authors are encouraged to use Swift to develop plugins in iOS and Kotlin (or Java) in Android.

Capacitor was designed to drop-in to any existing modern web app.

## How to build

```shell
npm install
npm run build-mobile
```

Note: if `npm install` fails, you may need to delete the `node_modules` folder and try again.

## How to run

### Web

```shell
# Run as dev
npm run dev
# Run as in production
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### iOS

To run the project on a device or simulator, run:

`npx cap run ios`

Note: make sure you are running on MacOS with XCODE installed.

**Important**: In order to run the iOS app, you need to run `gem install cocoapods` to install the Cocoapods Ruby Gem.

### Android

To run the project on a device or emulator, run:

`npx cap run android`

Note: make sure you are using the lastest version of Android Studio.

## Learn More

To learn more about Next.js and Capacitor, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Capacitor Documentation](https://capacitorjs.com/docs) - learn about Capacitor features.
