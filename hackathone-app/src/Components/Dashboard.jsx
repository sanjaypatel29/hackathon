import React from "react"

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }

      render(){
          const {Acc_token,Ref_token}=this.props
          return(
              <>
          <div>{Acc_token}</div>
          <div>{Ref_token}</div>
          </>
          )
      }


}