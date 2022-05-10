import React from "react";

function Addusers(){
  userData;

   this.onChange= this.onChangeId.bind(this) ;
   this.onChange= this.onChangeName.bind(this) ;
   this.onChange= this.onChangeEmai.bind(this) ;
   this.onSubmit= this.onSubmit.bind(this) ;


  this.state={
    id:'',
    name:'',
    email:''
  }

  }
  onChangeId(e) {
    this.setState({id: e.target.value})
  }
  onChangeName(e) {
    this.setState({name: e.target.value})
  }
  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }
  onSubmit(e){
    e.preventDfault()
  }

  componentDidMount() {
     this .userData=JSON.parse(localStorage.getItem(user));
       if(localStorage.getItem('user')){
          this.setState({
             id:this.userData.id,
             name:this.userData.name,
             email:this.userData.email
             
          })

       }else{
         this.setState({
          id:'',
          name:'',
          email:''

         })
       }
       
  }



  componentWillUpdate(nextProps,nextState){
    localStorage.setItem(user,JSON.stringify(nextState));

  }

  return(
        
 <div className="container">
        <form onSubmit={this.onSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">id</label>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="id" value={this.state.id} onChange={this.onChangeId}>
                </div>
                <div className="form-group col-md-6">
                   <label for="inputPassword4">Name</label>
                   <input type="text" className="form-control" id="inputPassword4" placeholder="Name" value={this.state.name} onChange={this.onChangeName}>
                </div>          
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                     <label for="inputZip">email</label>
                     <input type="text" className="form-control" id="inputZip" value={this.state.email} onChange={this.onChangeEmail}>
                </div>
            </div>
    
    
        </form>
</div>

      )
     }
 export default Addusers;
