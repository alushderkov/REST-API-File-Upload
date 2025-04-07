# REST-API-File-Upload

[![Node.js](https://img.shields.io/badge/Node.js-18.x-gray?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-gray?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](https://opensource.org/licenses/MIT)

> A REST API server written in TypeScript for working with files, arrays, and tabular data (CSV).

## 🎻 Features

### 🎼 File Operations
- 🖇️ Copy files: `POST /api/files/copy`
- 🛒 Move files: `PUT /api/files/move`
- 🗑️ Delete files: `DELETE /api/files`

### 🎼 Product List
- 🧾 Get the list of products: `GET /api/product_list/`
- 🗞️ Add a new product: `POST /api/product_list/{name},{price},{description}`

### 🎼 Array Operations
- 🎚️ Update an array element by nested indexes: `PUT /api/array?[index1][index2]...`

<br>

## 🪽 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server in development mode:

   ```bash
   npm run dev
   ```

3. Or start it in production mode:

   ```bash
   npm start
   ```
   
&nbsp;&nbsp;&nbsp;The server will be available at `http://localhost:5500` unless the `PORT` environment variable is set.

<br>

## 🗀 Project Structure

<pre>
src/
├── config/
│   ├── program_settings/       # Application settings
│   └── nodemon.json            # Nodemon settings
├── controller/                 # Request controllers
├── data/                       # Data files (CSV, JSON)
├── models/                     # Data models
├── router/                     # Route definitions
├── services/                   # Data services
app.ts                          # Main server file

package.json                    # Project configuration
package-lock.json
tsconfig.json
</pre>

<br>

## 💿 API Examples

#### &nbsp;🗀 Copy a file: ```POST /api/files/copy?from=source.txt&to=destination.txt```

#### &nbsp;🗀 Move a file: ```PUT /api/files/move?from=source.txt&to=destination.txt```

#### &nbsp;🗀 Delete a file: ```DELETE /api/files?path=file_to_delete.txt```

#### 📡 Get products: ```GET /api/product_list/```

#### 📡 Add a product: ```POST /api/product_list/ProductName,10$,Description```

####  📡️ Update an array element: ```PUT /api/array?[0][1][2]```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Content-Type: `application/json` Body: `{ "newValue": "example" }`

<br>

## 🔗 Dependencies

### Core:
- [`csv-parser`](https://www.npmjs.com/package/csv-parser) — for reading CSV files
- [`csv-stringify`](https://www.npmjs.com/package/csv-stringify) — for writing CSV files
- [`uuid`](https://www.npmjs.com/package/uuid) — for generating UUIDs

### Development:
- [`typescript`](https://www.npmjs.com/package/typescript) — enables TypeScript support
- [`ts-node`](https://www.npmjs.com/package/ts-node) — runs TypeScript files directly without precompiling
- [`nodemon`](https://www.npmjs.com/package/nodemon) — automatically restarts the app on file changes

<br>

## ⚙️ Customization

You can change the server port via the `PORT` environment variable:

```bash
export PORT=3000
npm start
```

<br>

## 🧬 License

This project is licensed under the **MIT** License. Free to use, modify, and distribute.
