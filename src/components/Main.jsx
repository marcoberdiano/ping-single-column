import {useState} from 'react';
import dashboard from '../images/illustration-dashboard.png';
import Input from './Input';
import Button from './Button';

const Main = () => {

    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(false);
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userInput);
       
        if(submit){
          setSubmit(false);
        }
    
        if(!validEmail) {
          setError(true);
        }else {
          setError(false);
          setSubmit(true);
          setUserInput('');
        }
        
    }

      const handleInput = ({target}) => {
        setUserInput(target.value);
        setSubmit(false);
    }

    return ( 
        <main className='main-container'>
        
        <form onSubmit={handleSubmit} className='form-container'>

          <Input 
            handleInput={handleInput} 
            error={error} 
            userInput={userInput} 
            submit={submit}
          />

          <Button/>
          
        </form>

        <img className='dashboard-img' src={dashboard} alt="dashboard" />

      </main>
     );
}
 
export default Main;