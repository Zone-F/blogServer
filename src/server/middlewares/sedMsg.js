module.exports = (state,message,err) => {
  let msg = {
    state,
    message,
  }
  if(err){
    msg['err'] = err
  }
  return msg
}