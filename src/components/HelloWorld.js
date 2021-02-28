import React from 'react'


function HelloWorld(props){
  let styledSet = {color: props.fontColor,
                  backgroundColor: props.bgColor};
  return (
    <div>
      {<h1 style={styledSet}>{"Received message:"+props.msg}</h1>}
    </div>
  )
}

export default HelloWorld