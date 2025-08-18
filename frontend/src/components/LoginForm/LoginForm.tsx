import styles from './LoginForm.module.scss';

const LoginForm = () => {
  return (
    <div className={`${styles['login-form']}`}>
      <img
        src='https://static.vecteezy.com/system/resources/thumbnails/001/486/411/small/open-book-icon-free-vector.jpg'
        alt='logo'
      />
      <form>
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
