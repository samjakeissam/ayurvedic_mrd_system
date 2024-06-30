import React from 'react'

const IDate = (props) => {

    const toTitleCase = (str)=>{
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }
    let label = toTitleCase(props.name.split('_').join(' '))

    let min = props.min;
    let max = props.max;
    let today = new Date().toISOString().split("T")[0];
    if(props.max==='today'){
        max = today;
    }
    if(props.min==='today'){
        min = today;
    }
  return (
    <>
    <input id={props.name} type="date" name={props.name} value={props.value} onChange={props.onChange} max={max} min={min} required={props.required}/>
    <label htmlFor={props.name} >{label}</label>
    </>
  )
}

export default IDate