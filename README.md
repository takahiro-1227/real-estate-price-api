# 不動産取引価格検索API

## 起動方法  
`pnpm install`  
`pnpm start`

※ pnpm を未インストールの場合は[こちら](https://pnpm.io/ja/installation)を参照し、インストールしてください。

## リクエスト方法  

### URL
`http://localhost:3000/api/v1/townPlanning/estateTransaction/bar`  

### 指定可能クエリパラメータ（いずれも必須）  
| キー | 内容 |
| --- | --- |
| year | 年度  ※ 2015年から2018年 |
| prefectureCode | 都道府県コード ※ 関東のみ |
| type | 用途地域<br>1：住宅地  2：商業地 | 

## リクエスト例  
`curl 'http://localhost:3000/api/v1/townPlanning/estateTransaction/bar?year=2015&prefectureCode=11&type=1'`