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

            {
                pizzas.map((p, index) => (
                    <Pizza pizzaObj = { p } key={index} />
                ))
            }
          
        </div>
      </div>
    )
  }
  