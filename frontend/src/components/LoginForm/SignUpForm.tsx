import axios from 'axios';
import styles from './LoginForm.module.scss';

const SignUpForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    axios
      .post('http://localhost:3000/api/users', data)
      .then((response) => {
        console.log('Sign up successful:', response.data);
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  };

  return (
    <div className={`${styles['login-form']}`}>
      <img
        src='https://static.vecteezy.com/system/resources/thumbnails/001/486/411/small/open-book-icon-free-vector.jpg'
        alt='logo'
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' required />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' required />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' required />

        <button className='btn btn-rounded' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUpForm;
