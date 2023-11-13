# MINNY
This project is part of 01418471(Software engineer) and 01418442(Webtechnology and service) courses

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![powershell](https://img.shields.io/badge/powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white)
![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)
![nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![vscode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)


<h2 align="left">Languages and Tools:</h2>
<a href="https://git-scm.com/" target="_blank">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="60" height="60"/>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://nuxt.com/docs/getting-started/introduction" target="_blank">
    <img src="https://nuxt.com/assets/design-kit/icon-green.svg"alt="nuxt" width="60" height="60">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://tailwindcss.com/docs/installation" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042" alt="tailwind" height="50"/>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://pinia.vuejs.org/introduction.html" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/479px-Pinialogo.svg.png" alt="pinia" width="40" height="60"/>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201" alt="typescript" width="60" height="60"/>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.figma.com/" target="_blank"> 
    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="50" height="50"/>
</a>

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# if something error use the command
npm --force -D install
```
Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```
## Architecture project
```
.
├───.nuxt
├───assets
│   └───css
├───components
│   ├───admin
│   ├───sections
│   └───setting
├───composables
├───fonts
│   └───Roboto
├───layouts
├───middleware
├───node_modules
├───pages
|   ├───auth
│   ├───cart
│   ├───category
│   │   ├───kid
│   │   ├───men
│   │   └───women
│   ├───checkout
│   ├───dashboard
│   │   ├───coupon
│   │   └───stock
│   ├───product
│   ├───setting
│   │   ├───address
│   │   ├───orderHistory
│   │   └───payment
│   ├───tracking-order
│   └───verify
|       └───email
├───public
│   └───images
├───server
├───store
├───utils
```
## Features
#### Login
- Create User Account
- Login
- Change Password
- verify email
#### Admin
- add product
- update product
- delete product
- accept the recipe
- dashboard
#### User
- change password
- filter the category such as color, size, gender
- search the product
- see detail product
- add product in cart
- detele product in cart
- add the credit card
- delete the credit card
- purchase product by credit card

## Account Tests

To run tests, run the following command

| account                  | password | role  |
|--------------------------|-------|-------|
| Ratchaphon.h111@gmail.com | Nueng111 | admin |
| wongkum55@gmail.com       | password | user  |