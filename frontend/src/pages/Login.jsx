import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import { useAuthStore } from '../stores/authStore';

const Login = () => {
  const [credentials, setCredentials] = useState({
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with your actual backend URL
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        setSession(data);
        navigate(data.user.role === 'admin' ? '/admin/dashboard' : data.user.role === 'vendor' ? '/vendor/dashboard' : '/');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand"><span className="auth-brand-mark">G</span> GullyCart</div>
        <div>
          <h2 className="auth-heading">Welcome back</h2>
          <p className="auth-subtitle">Log in to find fresh local vendors and everyday essentials nearby.</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label className="auth-label">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={credentials.phone} 
              onChange={handleChange} 
              required
              className="auth-input"
              placeholder="+91 9876543210" 
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Password</label>
            <input 
              type="password" 
              name="password" 
              value={credentials.password} 
              onChange={handleChange} 
              required
              className="auth-input"
              placeholder="••••••••" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="auth-submit"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <a href="/signup" className="auth-link">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;