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
      marginTop:65
    }
    
    const fillerStyles = {
      height: '7px',
      width: `${completed}%`,
      backgroundColor: '#51cf66',
      borderRadius: '10px',
      transform:'translateY(-1px)'
    }

    return (
      <div className="progressBar__container" style={containerStyles}>
        <div style={{...fillerStyles, textAlign:'right'}}>
            <span className="progressBar__label">
              {`${completed}% complete`}
            </span>
        </div>
      </div>
    );
};
  
export default ProgressBar;