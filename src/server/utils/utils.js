const resMsg= (state,message,err)=>{
  let msg = {
    state,
    message,
  }
  if(err){
    msg['err'] = err
  }
  return msg
}

module.exports = {
  resMsg
};