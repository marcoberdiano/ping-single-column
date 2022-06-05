const Input = ({handleInput, error, userInput, submit}) => {

    return ( <div className="input-container">

    <input 
      className={`${error ? 'invalidEmail' : 'inputEmail'}`} 
      onChange={handleInput} 
      type="text" 
      value={userInput} 
      name="email" 
      id="email" 
      placeholder='Your email address...'
    />

    {error && <p className='error'>Please provide a valid email address</p>}

    {submit && <p className='success'>Email received!</p>}

  </div> );
}
 
export default Input;