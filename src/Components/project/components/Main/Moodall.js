import { Modal} from "bootstrap";
import React from "react";

function Moodall( ){
    return(
        
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalL******abel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                  <div className="modal-content">
                         <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modaal title</h5>
                           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>      
                         </div>
                         <div className="modal-body">
                         <form>
        <div class="form-row">
           <div class="col">
              <input type="text" className="form-control" placeholder="First name"/>
           </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="Last name"/>
            </div>
           </div>  
      </form>
                         </div>
                       <div className="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                           <button type="button" class="btn btn-primary">Save changes</button>
                       </div>
                  </div>
           </div>

       </div>

      
    
    )
}
export default Moodall;
