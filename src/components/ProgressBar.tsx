interface IProgressBar{
    completed:number
}

const ProgressBar = ({completed}:IProgressBar) => {
  
    const containerStyles = {
        height: 5,
        width: '100%',
        backgroundColor: "white",
        borderRadius: 50,
        margin: 50,
      }
    
      const fillerStyles = {
        height: '7px',
        width: `${completed}%`,
        backgroundColor: '#51cf66',
        borderRadius: '10px',
        transform:'translateY(-1px)'
    }
  
    const labelStyles = {
      color: 'white',
      padding:5,
      fontSize:'13px',
      fontStyle:'italic',
      display:'block',
      transform: 'translateY(-30px)',
      minWidth:'81px'
    }

    return (
      <div style={{...containerStyles}}>
        <div style={{...fillerStyles, textAlign:'right'}}>
            <span style={{...labelStyles, wordBreak:'normal'}}>
              {`${completed}% complete`}
            </span>
        </div>
      </div>
    );
};
  
export default ProgressBar;