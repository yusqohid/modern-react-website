function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}! </h1>
      <p>saya berasal dari {props.asal} </p>
      <p>Ini adalah komponen greetings!</p>
    </div>
  );
}

export default Greeting;
