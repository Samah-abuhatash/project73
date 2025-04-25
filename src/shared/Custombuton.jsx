function  Custombuton(props) {
  console.log(props);
    return (
      <button className={`btn btn-outline-${props.type} btn-lg rounded-pill shadow`}>
        {props.text}
      </button>
    );
  }
  
  export default  Custombuton; 