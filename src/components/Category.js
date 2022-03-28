export default function Category(props){
    const {v, setCategory} = props
    return (
        <button onClick={() => setCategory(v)} key={v}>{v}</button>
    )
}