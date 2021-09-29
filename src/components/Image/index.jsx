import React from "react";

class Image extends React.Component{
  render(){
    const {src, alt} = this.props;
    return <div className='imageWrapper'>
      <img className='img' src={src} alt={alt} />
    </div>
  }
}

export default Image;