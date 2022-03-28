export default function Product(props) {
    console.log(props)
    const {obj} = props
    return (
        <div>
            <h2>{obj.name}</h2>
            <h3>{obj.category}</h3>
            <p>{obj.description}</p>
            <h4>{obj.price}</h4>
            <h5>Rating: {obj.rating}/5</h5>
        </div>
    )
}