

import React from 'react'

const Cbm = (state,action) => {
    let val=[{name:'kavin',place:'spm',age:20,email:'kndkf66',pass:'agfhag78'},
        {name:'raghul',place:'vpm',age:19,email:'hsf514',pass:'oiuhg410'},
        {name:'nikil',place:'theni',age:17,email:'dgdsg96',pass:'dfgbhn96'},
        {name:'guru',place:'cbe',age:21,email:'dgvxv547',pass:'wteyqujs84'},
        {name:'jana',place:'sulur',age:18,email:'aefrjkuy69',pass:'bcvjhw54'}
    ]
   switch(action.type){
    case "data":
    val.forEach(e=>{return <h4>{e.name}</h4>
      
    }
)
}  

}

export default Cbm