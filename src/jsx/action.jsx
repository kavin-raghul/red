// src/redux/actions.js

export const DELETE = 'DELETE'; // Action type constant

export const deleteUser = () => {
    const delval = prompt("Enter the name of the user to delete:");
    if (delval !== null && delval.trim() !== '') {
        return {
            type: DELETE,
            value: delval.trim()
        };
    }
    // Optionally, handle cases where no input is provided
    return {
        type: 'NO_ACTION'
    };
};

export const insertUser=()=>{
  const name=prompt("Enter name")
  const age=prompt("Enter age")
  const email=prompt("Enter email")
  const pass=prompt("Enter pass")
  const place=prompt("Enter place")
  const record={
       name,place,age,email,pass
  }
  return{
    type:"INSERT",
    newdata:record

  }
}

export const updaterecord=()=>{
  let name=prompt("Enter name to change their age:")
  return{
    type:'update',
    oldval:name
  }
}

export const sorting=()=>{
  return{
    type:"sorting"
  }
}

export const filter=()=>{
  return{
    type:"filter"
  }
}

export const search=()=>{
  return{
    type:"search"
  }
}