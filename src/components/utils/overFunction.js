export default {
  install(Vue, options){
    Vue.prototype.showOverFunction = ()=>{
      alert('大家好，我showOverFunction出现了');
    }
  }
}