# JavaScript automated tests

Sample project to write unit, integration, API, browser and acceptance tests in JavaScript.
The application is a simple [Express.js][express] backend with a [Vue.js][vue] frontend.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Requirements](#requirements)
- [Usage](#usage)
  - [Production](#production)
- [Configuration](#configuration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Requirements

* [Node.js][node] 10.x



## Usage

Clone this repository:

```bash
git clone https://github.com/MediaComem/comem-archidep-js-automated-tests
```

Install dependencies:

```bash
cd comem-archidep-js-automated-tests
npm ci
```

Run the application in development mode:

```bash
npm run dev
```

Visit http://localhost:3000

### Production

Run the application in production mode:

```bash
npm start
```



## Configuration

Set `$PORT` to customize the port on which the server will listen.
It defaults to `3000`.



[express]: https://expressjs.com
[vue]: https://vuejs.org
