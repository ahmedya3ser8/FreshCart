import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Login() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState(0);
  const email = JSON.parse(localStorage.getItem('email'));
  const password = JSON.parse(localStorage.getItem('password'));
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === mail && password === pass) {
      toast.success('Success', {
        position: 'bottom-left',
        autoClose: 1500,
      });
      navigate('/home')
    } else {
      toast.error('invalid email or password', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }
  }
  return (
    <section className="bg-[#8d76c4] h-screen">
      <div className="container">
        <div className="login-form w-[95%] md:w-auto bg-white flex flex-col justify-center items-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-5">
          <h2 className="text-[25px] text-left block w-full mb-[10px] md:mb-[10px] relative before:content-[''] before:absolute before:w-[40px] before:h-[2px] before:bottom-0 before:bg-blue-400 pb-1">Login</h2>
          <form className="login-content w-full md:w-[700px] h-auto md:h-[300px]" name="login-content" id="login-content" autoComplete="on">
            <div className="login-box mb-[20px]">
              <label htmlFor="mail" className="text-[22px] text-[#666] mb-[5px] block">Email</label>
              <input type="email" name="mail" id="mail" autoFocus onChange={(e) => setMail(e.target.value)} className="h-[40px] w-full p-[10px] border-[1px] border-solid border-[#ccc] rounded-[10px] outline-none" />
            </div>
            <div className="login-box mb-[20px]">
              <label htmlFor="pass" className="text-[22px] text-[#666] mb-[5px] block">passsword</label>
              <input type="password" name="pass" id="pass" onChange={(e) => setPass(e.target.value)} className="h-[40px] w-full p-[10px] border-[1px] border-solid border-[#ccc] rounded-[10px] outline-none" />
            </div>
            <button className="block w-full bg-[#8d76c4] text-white font-medium p-[10px] mb-[15px] text-[18px]" onClick={handleLogin}>login</button>
            <p className="mb-[15px] text-[18px] text-center text-[#666]">Don&apos;t have an account? <Link to={'/'} className="text-[#8d76c4]">Sigin up</Link></p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;