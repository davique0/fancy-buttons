export default function LightSwitchButton(props) {

  return (
    <button className='LightSwitchButton' onClick={props.onClick}>
      {props.light === true && <span><i>💡</i> I'm on!</span>}
      {props.light === false && <span className='off'><i>💡</i> I'm off!</span>}
    </button>
  )
}
