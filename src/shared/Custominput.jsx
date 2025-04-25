function Custominput(props){
return(
    <div>
    <label htmlFor={props.type}>{props.type}</label>
    <input
      type={props.type}     // نوع الإدخال يجي من الـ props
      id={props.type}       // الربط بين label و input
      name={props.name}     // اسم الحقل يأتي من props
      placeholder={props.placeholder}  // النص داخل الحقل
      title={props.title}               // الوصف الإضافي
    />
  </div>

);

} 
export default Custominput; 