# Vite Project

這是一個使用 Vite 和 Vue 3 建立的簡單待辦事項應用程式，並用json-server模擬後端api。

## 目錄結構

- `App.vue`: 主應用程式元件。
- `components/Item.vue`: 顯示單個待辦事項的元件。
- `components/Sort.vue`: 排序按鈕元件。
- `components/Add.vue`: 新增待辦事項的元件。
- `views/Todo.vue`: 顯示待辦事項列表的元件。
- `composables/useRequest.js`: 用於處理 HTTP 請求的可組合函數。
- `composables/useTodo.js`: 用於管理待辦事項的可組合函數。
- `generateData.cjs`: 用於生成假資料並寫入 `db.json` 文件。
- `package.json`: 項目配置文件。

## 安裝

1. 克隆此倉庫：
    ```sh
    git clone https://github.com/YCNaclptz/Vue-TodoList.git
    cd Vue-TodoList
    ```

2. 安裝依賴：
    ```sh
    pnpm install
    ```

## 運行

1. 啟動開發伺服器：
    ```sh
    pnpm dev
    ```

2. 啟動 JSON 伺服器：
    ```sh
    pnpm db
    ```

## 使用

- 在首頁可以看到待辦事項列表。
- 使用新增輸入框後按下Enter可以新增待辦事項。
- 使用排序按鈕可以切換待辦事項的排序順序。
- 每個待辦事項都有刪除按鈕可以刪除該項目。

## 主要依賴

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Mock.js](http://mockjs.com/)
- [json-server](https://github.com/typicode/json-server)

## 開發

- `useRequest.js` 提供了基本的 HTTP 請求方法（GET、POST、DELETE）。
- `useTodo.js` 管理待辦事項的狀態和操作（載入、刪除、新增、排序）。
- `generateData.cjs` 使用 Mock.js 生成假數據並寫入 `db.json` 文件。這個文件包含一個 `generateData` 函數，該函數生成一個包含 5 條新聞的數據對象，每條新聞包含 `id`、`title` 和 `content` 屬性。生成的數據會被寫入到 `db.json` 文件中。

## 風格

- 使用 SCSS 作為樣式語言。
- 每個元件的樣式都是 scoped 的，確保樣式不會影響到其他元件。
