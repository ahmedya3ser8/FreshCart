import { useState } from "react";
import { toast } from 'react-toastify';

function CheckoutItem() {
  const [address, setDetails] = useState('');
  const [phone, setPhone] = useState(0);
  const [country, setCountry] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const addressRe = /[a-z]/g;
    const phoneRe = /(010|011|012|015)\d{8}/;
    const countryRe = /[a-z]/g;
    const ValidateAddress = addressRe.test(address);
    let ValidatePhone = phoneRe.test(phone);
    const ValidateCountry = countryRe.test(country);
    if(address == '' | phone == '' | country == '') {
      toast.error('Check All Inputs', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }
    if(ValidateAddress && ValidatePhone && ValidateCountry) {
      toast.success('Success Validate', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    } else {
      toast.error('invalid address or phone or country', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }
  }
  return (
    <section className="pt-[75px] pb-10">
      <div className="container">
        <div className="checkout-box">
          <form id="checkout-form" name="checkout-form">
            <div className="mb-6">
              <input type="text" placeholder="Address Details" name="address" onChange={(e) => setDetails(e.target.value)} className={(/[a-z]/g).test(address) ? 'w-full p-[10px] rounded-[10px] outline-none border-[1px] border-solid border-[#0f0]' : 'w-full p-[10px] rounded-[10px] outline-none border-[1px] border-solid border-[#f00] placeholder:text-red-300'} />
            </div>
            <div className="mb-6">
              <input type="number" placeholder="Phone Number" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} className={(/(010|011|012|015)\d{9}/).test(phone) ? 'w-full p-[10px] rounded-[10px] outline-none border-[1px] border-solid border-[#0f0]' : 'w-full p-[10px] rounded-[10px] outline-none border-[1px] border-solid border-[#f00] placeholder:text-red-300'} />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="Your Country" name="country" onChange={(e) => setCountry(e.target.value)} className={(/[a-z]/g).test(country) ? 'w-full p-[10px] rounded-[10px] outline-none border-[1px] border-solid border-[#0f0]' : 'w-full p-[10px] rounded-[10px] outline-none border-[1px] border-solid border-[#f00] placeholder:text-red-300'} />
            </div>
          </form>
          <button type="submit" className="bg-[#0aad0a] text-white p-[10px] rounded-[10px]" onClick={handleSubmit}>Pay Now</button>
        </div>
      </div>
    </section>
  )
}

export default CheckoutItem;