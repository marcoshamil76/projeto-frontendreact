import './App.css';
import CardNave from './components/Cardnave/Cardnave';
import Header from './components/Header/Header';
import {useEffect, useState} from "react"
import Produtos from "./assets/produtos.json"
import {Main, CardContainer} from "./styled"
import Cart from './components/Cart/Cart'
import ResumeCart from './components/ResumeCart/ResumeCart';
import Filters from './components/Filter/Filter';
import Footer from "./components/Footer/Footer";


function App() {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
  
  const [cartProducts, setCartProducts] = useState(cartFromLocalStorage)
  const [textFilter,setTextFilter]=useState("")
  const [minPrice,setMinPrice]=useState(-Infinity)
  const [maxPrice,setMaxPrice]=useState(Infinity)
  const [sortingParameter,setSortingParameter]=useState("title")
  const [order,setOrder]=useState("asc")

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartProducts))
  },[cartProducts])

  const [ activeScreen, setActiveScreen ] = useState("ProductsScreen")
    
    const goToProductsScreen = () => {
        setActiveScreen("ProductsScreen")
    }

    const goToCartScreen = () => {
        setActiveScreen("CartScreen")
    }
const limparCart =()=>{
  setCartProducts([])
  goToProductsScreen()

}


    const renderScreen = () => {
      switch (activeScreen) {
          case "ProductsScreen":
            return (
                <>

              <Main>
              <CardContainer>
                {Produtos
                .filter((prodFilter)=>{
                  return prodFilter.name.toLowerCase().includes(textFilter.toLowerCase())
                })
                .filter((prodFilter)=>{
                  return prodFilter.valor >= minPrice || minPrice ===""
                })
                .filter((prodFilter)=>{
                  return prodFilter.valor <= maxPrice || maxPrice ===""
                })
                .sort((currentProduct,nextProduct)=>{
                  switch (sortingParameter){
                    case "price":
                      return currentProduct.valor - nextProduct.valor
                    default:
                      return currentProduct.name.localeCompare(nextProduct.name)  
                  }
                })
                .sort(()=>{
                  if(order === "asc"){
                    return 0
                  }else{
                    return -1
                  }
                })
                .map((produto)=>{
                  return (
                    
                    <CardNave 
                    
                    key={produto.id}
                    produto={produto}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    ></CardNave>
                    
                    )
                  })}
              </CardContainer>
          
          </Main>
           <Footer/>
           </>
              )
              case "CartScreen":

              
                return(
                    
                  cartProducts.map((produtoInCart)=>(
                    
                      <Cart
                      produto={produtoInCart}
                      total={total}
                      key={produtoInCart.id}
                      onAdd={onAdd}
                      onRemove={onRemove}
                      goToProductsScreen={goToProductsScreen}
                    />))
                    
                )
                    
                  
              default:
              return <div>Tela não existe</div>
      }
  }
  

  const onAdd = (product) => {
 
    const newCartProducts = [...cartProducts]
    let exist = newCartProducts.find((x) => x.id === product.id);
 
    if (!exist){
      const novoProduto ={...product, qty: 1}
      newCartProducts.push(novoProduto)

    }else{
     
      exist.qty++
    }
    
    setCartProducts(newCartProducts)
       console.log(cartProducts)
 
  };
  const onRemove = (product) => {
    const newCartProducts = [...cartProducts]
    let exist = newCartProducts.find((x) => x.id === product.id);
        // o primeiro find foi utilizado para localizar o objeto 
        // depois o findIndex foi utilizado pois o splice precisa do índice 
        // para fazer a exclusão e não somente o objeto
      let exist2 = newCartProducts.findIndex((x)=> x.id === product.id)
    if (exist){
      if(exist.qty >= 1){
        exist.qty--
        // checar se exist o produto  e se é maior igual a 1
        setCartProducts(newCartProducts)
      }
        if(exist.qty === 0){
            newCartProducts.splice(exist2,1)
            setCartProducts(newCartProducts)
            // se o produto atingiu 0 qtde no carrinho o splice remove ele do carrinho
        }
        console.log(cartProducts)
      }}

      const total = cartProducts.reduce(
       
        (acc, produto)=>produto.valor * produto.qty + acc ,
        0
        )
        console.log(total)
 
return (
  <>
  
  <Header 
    cartProducts={cartProducts.length}
    goToCartScreen={goToCartScreen}
  />
  {activeScreen !=="CartScreen"?<Filters
    textFilter={textFilter}
    setTextFilter={setTextFilter}
    minPrice={minPrice}
    setMinPrice={setMinPrice}
    maxPrice={maxPrice}
    setMaxPrice={setMaxPrice}
    setSortingParameter={setSortingParameter}
    sortingParameter={sortingParameter}
    order={order}
    setOrder={setOrder}
  />:<></>}

   {activeScreen === "CartScreen"?<ResumeCart 
            cartProducts={cartProducts} 
            total={total}
            goToProductsScreen={goToProductsScreen}
            limparCart={limparCart}
      />:<></>}
   
  {renderScreen()}
  </>
  
    

);

}
export default App;

