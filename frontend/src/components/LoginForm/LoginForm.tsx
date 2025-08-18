import axios from 'axios';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await axios.post('http://localhost:3000/api/users/login', data);
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      return user;
    } catch (err) {
      console.log('Login failed:', err.response?.data || err.message);
      throw err;
    }
  };

  return (
    <div className={`${styles['login-form']}`}>
      <img
        src='https://static.vecteezy.com/system/resources/thumbnails/001/486/411/small/open-book-icon-free-vector.jpg'
        alt='logo'
      />
      <form onSubmit={handleLogin}>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' required />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' required />

        <button className='btn btn-rounded' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
