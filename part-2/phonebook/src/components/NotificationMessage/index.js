const NotificationMessage = ({ message, type }) => {
  return (
    <>
      {type === 'error' ? <p style={{ color: 'red' }}>{message}</p> : <p style={{ color: 'green' }}>{message}</p>}
    </>
  )
}

export { NotificationMessage }