export default function Pizza({ pizzaObj }) {


    return (
      <div className='col'>
        <div className="card">
            <img src= { pizzaObj.image } alt="pizza" className="card-img-top p-2 p-md-3 border-bottom" />
            <div className="card-body">
                <h2 className="card-title "> {pizzaObj.title} </h2>
                <p className="card-description"> {pizzaObj.description} </p>
                <span className="bagde text-bg-primary bg-dark"> {pizzaObj.price} TL </span>
            </div>

        </div>
        
      </div>
    )
  }