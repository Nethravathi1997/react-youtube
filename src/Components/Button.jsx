
export function Button({buttonText,bgColor,onClick}){
    //const {buttonText,bgColor,onClick} = props;
    // console.log(props);

    return(
      <button onClick={onClick} style={{backgroundColor:bgColor}}>
        {buttonText}</button>
    )
  }