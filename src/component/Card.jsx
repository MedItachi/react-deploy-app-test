
export default function Card({name,yearBorn,country,technology,photo}){
    const path = `/images/authors/${photo}`;
    return(
        <div className="card">
            <div><img src={path} /></div>
            <div>{name}(<span>{yearBorn}</span>)</div>
        </div>
    )
}