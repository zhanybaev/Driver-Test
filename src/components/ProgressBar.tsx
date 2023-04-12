import React from 'react';
interface IProgressBar{
    completed:number
}

const ProgressBar = ({completed}:IProgressBar) => {
  
    const containerStyles = {
        height: 5,
        width: '50%',
        backgroundColor: "white",
        borderRadius: 50,
        margin: 50
      }
    
      const fillerStyles = {
        height: '7px',
        width: `${completed}%`,
        backgroundColor: '#51cf66',
        borderRadius: '50%',
        transform: 'translateY(-1px)'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold',
      display:'block',
      transform: 'translateY(-30px)'
    }
  
    return (
      <div style={containerStyles}>
        <div style={{...fillerStyles, textAlign:'right'}}></div>
        <span style={labelStyles}>
            {`${completed}%`}
        </span>
      </div>
    );
};
  
export default ProgressBar;