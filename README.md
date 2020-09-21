# FrontEnd

- [x] [React Style Guides by AirBnb](https://github.com/airbnb/javascript/tree/master/react#naming)
- [x] [The Art of Shit Code](https://github.com/trekhleb/state-of-the-art-shitcode)
- [x] [Clean Code Practises](https://github.com/ryanmcdermott/clean-code-javascript)            
- [x] [Airbnb JS Style Guide](https://github.com/airbnb/javascript/blob/master/README.md)

`npm start` to start server on port 3000

📁 components for components

📁 contexts for contexts

📁 pages for pages

📁 layouts for layouts

### Creating Components

We are using `generate-react-cli` to generate components

```
   npx generate-react-cli component SearchBar
   npx generate-react-cli component Home --type=page
   npx generate-react-cli component Jumbotron --type=layout
```

✅ Name the component,pages,contexts in PascalCase when generating using generate-react-cli  
✅ camelCase for their instances  
✅ Use Prettier and eslint

```
📁 components
  📁 OutlinedButton
      - OutlinedButton.js
      - OutlinedButton.scss
      - OutlinedButton.test.js
```

# Backend
- [x] [NodeJS Best Practices](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.md)                                

`npm start` to start server on port 5500

```
📁 components
  📁 farm
      - index.js
      - farmController.js
      - farmModel.js   
      - farmRouter.js   
      - farm.test.js 
      - utils.js*  
```
📁 scripts for scripts           
📁 config for config files               

