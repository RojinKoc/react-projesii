export default function Pizza(props) {

    console.log(props)

    return (
      <div className='col'>
        <div className="card">
            <img src= { props.image } alt="pizza" className="card-img-top p-2 p-md-3 border-bottom" />
            <div className="card-body">
                <h2 className="card-title "> {props.title} </h2>
                <p className="card-description"> {props.description} </p>
                <span className="bagde text-bg-primary bg-dark"> {props.price} TL </span>
            </div>

        </div>
        
      </div>
    )
  }