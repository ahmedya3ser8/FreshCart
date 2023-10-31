import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Register() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState(0);
  const [gender, setGender] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRe = /\w+@gmail.(com|info|org|)/ig;
    const phoneRe = /(010|011|012|015)\d{8}/;
    const passwordRe = /\w+/ig;
    const confirmPasswordRe = /\w+/ig;
    const validateEmail= emailRe.test(email);
    const validatePhone= phoneRe.test(phone);
    const validatePassword= passwordRe.test(password);
    const validatePasswordRe= confirmPasswordRe.test(confirmPassword);
    let confirmed;

    if(password === confirmPassword) {
      confirmed = true;
    } else {
      toast.error('password not matched', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }

    if(name == '' | userName == '' | email == '' | phone == '' | password == '' | confirmPassword == '' | gender == '') {
      toast.error('Check All Inputs', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    } else if(validateEmail && validatePhone && validatePassword && validatePasswordRe && confirmed) {
      localStorage.setItem('name', JSON.stringify(name));
      localStorage.setItem('userName', JSON.stringify(userName));
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('phone', JSON.stringify(phone));
      localStorage.setItem('password', JSON.stringify(password));
      localStorage.setItem('confirmPassword', JSON.stringify(confirmPassword));
      localStorage.setItem('gender', JSON.stringify(gender));
      toast.success('Success Validate', {
        position: 'bottom-left',
        autoClose: 1500,
      });
      navigate('/login')
    } else {
      toast.error('invalid email or phone or password', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }
  }
  return (
    <section className="bg-[#8d76c4] h-screen">
      <div className="container">
        <div className="register-form w-[95%] md:w-auto bg-white flex flex-col justify-center items-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-5">
          <h2 className="text-[25px] text-left block w-full mb-[5px] md:mb-[10px] relative before:content-[''] before:absolute before:w-[40px] before:h-[2px] before:bottom-0 before:bg-blue-400 pb-1">Registration</h2>
          <form className="register-content w-full md:w-[700px] h-auto md:h-[430px]" name="register-form" id="register-form" autoComplete="on">
            <div className="register-box flex justify-between items-center flex-col md:flex-row gap-0 md:gap-5 mb-2 md:mb-5">
              <div className="register-info w-full md:w-1/2">
                <label htmlFor="Name" className="block text-[16px] md:text-[18px] mb-[5px] text-[#666]">Full Name</label>
                <input type="text" placeholder="Enter Your Name" id="Name" name="FullName" autoFocus onChange={(e) => setName(e.target.value)} className="w-full h-[40px] border-[1px] border-solid border-[#ccc] p-[10px] outline-none rounded-[10px]" />
              </div>
              <div className="register-info w-full md:w-1/2">
                <label htmlFor="UserName" className="block text-[16px] md:text-[18px] mb-[5px] text-[#666]">User Name</label>
                <input type="text" placeholder="Enter Your UserName" id="UserName" name="UserName" onChange={(e) => setUserName(e.target.value)} className="w-full h-[40px] border-[1px] border-solid border-[#ccc] p-[10px] outline-none rounded-[10px]" />
              </div>
            </div>
            <div className="register-box flex justify-between items-center flex-col md:flex-row gap-0 md:gap-5 mb-2 md:mb-5">
              <div className="register-info w-full md:w-1/2">
                <label htmlFor="email" className="block text-[16px] md:text-[18px] mb-[5px] text-[#666]">Email</label>
                <input type="email" placeholder="Enter Your Email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} className="w-full h-[40px] border-[1px] border-solid border-[#ccc] p-[10px] outline-none rounded-[10px]"/>
              </div>
              <div className="register-info w-full md:w-1/2">
                <label htmlFor="phone" className="block text-[16px] md:text-[18px] mb-[5px] text-[#666]">Phone Number</label>
                <input type="number" placeholder="Enter Your Phone" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} className="w-full h-[40px] border-[1px] border-solid border-[#ccc] p-[10px] outline-none rounded-[10px]" />
              </div>
            </div>
            <div className="register-box flex justify-between items-center flex-col md:flex-row gap-0 md:gap-5 mb-2 md:mb-5">
              <div className="register-info w-full md:w-1/2">
                <label htmlFor="password" className="block text-[16px] md:text-[18px] mb-[5px] text-[#666]">Password</label>
                <input type="password" placeholder="Enter Your Password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} className="w-full h-[40px] border-[1px] border-solid border-[#ccc] p-[10px] outline-none rounded-[10px]" />
              </div>
              <div className="register-info w-full md:w-1/2">
                <label htmlFor="confirmPassword" className="block text-[16px] md:text-[18px] mb-[5px] text-[#666]">Confirm Password</label>
                <input type="password" placeholder="Enter Your password" id="confirmPassword" name="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} className="w-full h-[40px] border-[1px] border-solid border-[#ccc] p-[10px] outline-none rounded-[10px]" />
              </div>
            </div>
            <label className="block text-[20px] text-[#666] mb-[5px] md:mb-[15px]">Gender</label>
            <div className="flex justify-between items-center px-0 md:px-[20px] gap-5 mb-[10px]">
              <div className="flex items-center gap-[5px]">
                <input type="radio" name="gender" id="male" value='male' onChange={(e) => setGender(e.target.value)} className="w-[18px] h-[18px] rounded-full bg-[#ddd] cursor-pointer"/>
                <label htmlFor="male" className="text-[14px] md:text-[18px] text-[#666] cursor-pointer">male</label>
              </div>
              <div className="flex items-center gap-[5px]">
                <input type="radio" name="gender" id="female" value='female' onChange={(e) => setGender(e.target.value)} className="w-[18px] h-[18px] rounded-full bg-[#ddd] cursor-pointer"  />
                <label htmlFor="female" className="text-[14px] md:text-[18px] text-[#666] cursor-pointer">female</label>
              </div>
              <div className="flex items-center gap-[5px]">
                <input type="radio" name="gender" id="other" value='other' onChange={(e) => setGender(e.target.value)} className="w-[18px] h-[18px] rounded-full bg-[#ddd] cursor-pointer"  />
                <label htmlFor="other" className="text-[14px] md:text-[18px] text-[#666] cursor-pointer">prefer not to say</label>
              </div>
            </div>
            <button type="submit" className="block w-full bg-[#8d76c4] text-white font-medium p-[10px] mb-[10px]" onClick={handleSubmit}>Sigin up</button>
            <p className="mb-[15px] text-[18px] text-center text-[#666]">You have an account? <Link to={'/login'} className="text-[#8d76c4]">login</Link></p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register;