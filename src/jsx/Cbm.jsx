// src/redux/Cbm.js

const initval = {
    data: [
        { name: 'kavin', place: 'spm', age: 20, email: 'kndkf66', pass: 'agfhag78' },
        { name: 'raghul', place: 'vpm', age: 19, email: 'hsf514', pass: 'oiuhg410' },
        { name: 'nikil', place: 'theni', age: 17, email: 'dgdsg96', pass: 'dfgbhn96' },
        { name: 'guru', place: 'cbe', age: 21, email: 'dgvxv547', pass: 'wteyqujs84' },
        { name: 'jana', place: 'spm', age: 18, email: 'aefrjkuy69', pass: 'bcvjhw54' }
    ]
}

const Cbm = (state = initval, action) => {
    switch(action.type){
        case 'DELETE':
            return {
                ...state,
                data: state.data.filter(val => val.name !== action.value)
            };
        case 'INSERT':
            return{
                ...state,data:[...state.data,action.newdata]
            }
        case 'update':
          return{  
         ...state,data:
          state.data.map(e=>{
             
                if(e.name===action.oldval)
                  {
                    let newage=parseInt(prompt("Enter new age to update..."))
                    return {...e,age:newage}
                  }
                  return e;
          })
        } 
        case "sorting":
            console.log([...state.data])
            return{
                ...state,data:[...state.data].sort((a,b)=>a.age-b.age)
                }
        case "filter":
            let value=prompt("Enter place to filter data:")
            return{
                ...state,data:state.data.filter(val=>{ return val.place===value})

            } 
            
            case 'search':
                let ans=prompt("Enter value to search...")
                return{
                  ...state,data:state.data.filter(e=>e.name.includes(ans)) 
                }
        default:
            return state;
    }
}

export default Cbm;
