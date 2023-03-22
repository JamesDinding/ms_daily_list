# 專案

類似於筆記本，可以開卡片，並且拖曳移動卡片所在的區塊。最終目標是製作成類似 Trello 的模式。

## 相關套件

React, TypeScript, Redux, React-beautiful-dnd

其中 React-beautiful-dnd 用在拖曳時，可以提供更好的畫面及體驗。

Redux 協助管理資料

## 元件大致上的結構

    |-- App
        |-- NavigationBar
        |-- Content
             |-- Section
                |-- List
                    |-- Card
            |-- Section
                |-- List
                    |-- Card
            |-- Section
                |-- List
                    |-- Card

### 待改進部分

- 區塊數量應可以主動新增

- 更動卡片內容時，起碼應該有基本的 log

- 針對 RWD 在調整畫面

## 本地端使用

`npm install`

`npm run start`
