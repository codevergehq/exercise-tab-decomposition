import { useState } from 'react';
import styles from '../styles/Tabs.module.css';
import formStyles from '../styles/Form.module.css';

function MonolithicTabs() {
  const [activeTab, setActiveTab] = useState('login');
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div className={styles.container}>
      {/* Tabs Header */}
      <div className={styles.header}>
        <button
          className={`${styles.tab} ${activeTab === 'login' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'register' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('register')}
        >
          Register
        </button>
      </div>

      {/* Tabs Content */}
      <div className={styles.content}>
        {/* Login Form */}
        {activeTab === 'login' && (
          <form 
            className={formStyles.form}
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Login form submitted:', loginForm);
            }}
          >
            <div className={formStyles.formGroup}>
              <label
                htmlFor="login-email"
                className={formStyles.label}
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                className={formStyles.input}
                value={loginForm.email}
                onChange={(e) => setLoginForm({
                  ...loginForm,
                  email: e.target.value
                })}
              />
            </div>
            <div className={formStyles.formGroup}>
              <label
                htmlFor="login-password"
                className={formStyles.label}
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                className={formStyles.input}
                value={loginForm.password}
                onChange={(e) => setLoginForm({
                  ...loginForm,
                  password: e.target.value
                })}
              />
            </div>
            <button
              type="submit"
              className={formStyles.button}
            >
              Login
            </button>
          </form>
        )}

        {/* Register Form */}
        {activeTab === 'register' && (
          <form 
            className={formStyles.form}
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Register form submitted:', registerForm);
            }}
          >
            <div className={formStyles.formGroup}>
              <label
                htmlFor="register-username"
                className={formStyles.label}
              >
                Username
              </label>
              <input
                id="register-username"
                type="text"
                className={formStyles.input}
                value={registerForm.username}
                onChange={(e) => setRegisterForm({
                  ...registerForm,
                  username: e.target.value
                })}
              />
            </div>
            <div className={formStyles.formGroup}>
              <label
                htmlFor="register-email"
                className={formStyles.label}
              >
                Email
              </label>
              <input
                id="register-email"
                type="email"
                className={formStyles.input}
                value={registerForm.email}
                onChange={(e) => setRegisterForm({
                  ...registerForm,
                  email: e.target.value
                })}
              />
            </div>
            <div className={formStyles.formGroup}>
              <label
                htmlFor="register-password"
                className={formStyles.label}
              >
                Password
              </label>
              <input
                id="register-password"
                type="password"
                className={formStyles.input}
                value={registerForm.password}
                onChange={(e) => setRegisterForm({
                  ...registerForm,
                  password: e.target.value
                })}
              />
            </div>
            <div className={formStyles.formGroup}>
              <label
                htmlFor="register-confirm-password"
                className={formStyles.label}
              >
                Confirm Password
              </label>
              <input
                id="register-confirm-password"
                type="password"
                className={formStyles.input}
                value={registerForm.confirmPassword}
                onChange={(e) => setRegisterForm({
                  ...registerForm,
                  confirmPassword: e.target.value
                })}
              />
            </div>
            <button
              type="submit"
              className={formStyles.button}
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MonolithicTabs;
