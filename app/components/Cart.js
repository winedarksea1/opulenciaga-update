import React from 'react';

//get these from this.prop
export default class Cart extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount(){
      this.props.getCart()
    }
    render() {
      return(
        <div>

          <h3>{this.props}</h3>
        </div>
    )
    }

}
