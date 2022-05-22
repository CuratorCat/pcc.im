export function Avatar(props) {
  if (props.avatar == null) {
    return (
      <div className="w-[100px] h-[100px] animate-pulse" style={{ background: 'grey' }}>
        loading
      </div>
    )
  // } else if (props.avatar.startsWith('https')) {
  //   return <img src={props.avatar} width={100} height={100} style={{ background: 'grey' }} />
  } else if (props.avatar === '') {
    return (
      <div className="w-[100px] h-[100px]" style={{ background: 'grey' }}>
        no avatar
      </div>
    )
  } else {
    return (
      <img
        src={'https://metadata.ens.domains/mainnet/avatar/' + props.ens}
        width={100}
        height={100}
        style={{ background: 'grey' }}
      />
    )
  }
}
