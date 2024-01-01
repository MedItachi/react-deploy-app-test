export default function TextField({label,size}) {

    /*
    * Destructuring :
      let obj = {x:20,y:30,color:"red"}
      let {color,x} = obj
      let t1 = [10,20,30,40]
      let [e1,e2] = t1;

      Spread Operator :
      obj = {id:1,...obj,z:100}
      obj = {...obj,x:100}
    */
    return(
        <div className="text-field">
            <label htmlFor={label}>{label}</label>:
            <input type="text" size={size}/>
        </div>
    )

}