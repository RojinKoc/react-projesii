import Pizza from "./Pizza"

export default function PizzaList() {

    const pizzas = [
        {
            title : "Sucuklu Pizza",
            description : " Süper Pizza! ",
            image : "./SucukluPizza.jpeg",
            price : 300
        },
        {
            title : "Karışık Pizza",
            description : " Süper Pizza! ",
            image : "./KarisikPizza.jpeg",
            price : 400
        },
        {
            title : "Mantarlı Pizza",
            description : " Süper Pizza! ",
            image : "./MantarlıPizza.jpeg",
            price : 500
        }
    ]


    return (
      <div className='pizza-list'>
        <h2>Pizza List</h2>
        <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4'>
          <Pizza title = { pizzas[0].title }  description = { pizzas[0].description } image = { pizzas[0].image } price = { pizzas[0].price } />
          <Pizza title = { pizzas[1].title }  description = { pizzas[1].description } image = { pizzas[1].image } price = { pizzas[1].price } />
          <Pizza title = { pizzas[2].title }  description = { pizzas[2].description } image = { pizzas[2].image } price = { pizzas[2].price } />

        </div>
      </div>
    )
  }
  