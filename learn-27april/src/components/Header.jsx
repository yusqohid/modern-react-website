
function Header(props) {
  return (
    <>
      <h1>Header {props.name}</h1>
      <p>ini adalah header ke-{props.name}</p>
    </>
  )
}

export default Header
