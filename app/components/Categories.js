import React from 'react';

//get these from this.prop
export default class CategoryComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount(){
      this.props.getCategories()
    }
    render() {
      return(
        <div>

          <h3>{this.props.categories[1] && this.props.categories[1].name}</h3>
        </div>
    )
    }

}

