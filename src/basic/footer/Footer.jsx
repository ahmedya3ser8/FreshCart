
function Footer() {
  return (
    <footer className="bg-[#f0f3f2] py-8">
      <div className="container">
        <div className="footer-head border-b-[1px] border-solid border-[#ccc] pb-10">
          <h3 className="text-[25px] mb-[10px]">Welcome ahmed Get the FreshCart app</h3>
          <p className="text-[18px] text-[#777] mb-[10px]">we will send you a link , open it on your phone to download the app</p>
          <div className="flex flex-col lg:flex-row gap-6">
            <input type="text" id="footer-input" className="w-full h-[40px] rounded-[10px] outline-none p-2" />
            <button className="w-full md:w-[180px] text-[18px] h-[40px] p-2 bg-[#0aad04] text-white rounded-[10px]">Share App</button>
          </div>
        </div>
        <div className="footer-bottom flex justify-between items-center flex-col lg:flex-row pt-10">
          <div className="left flex items-center gap-5">
            <span className="text-[#777]">Payment Partners</span>
            <img src="/public/images/pay.webp" alt="pay-img" />
          </div>
          <div className="right flex items-center gap-5">
            <span className="text-[#777] text-[14px]">Get deliveries with FreshCart</span>
            <img src="/public/images/app-store/appStore.png" alt="appStore"  className="w-[100px]"/>
            <img src="/public/images/app-store/googlePlay.png" alt="googlePlay" className="w-[100px]" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;