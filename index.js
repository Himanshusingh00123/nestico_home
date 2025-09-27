const login=()=>{
    Swal.fire({
        html:`
            <div class=" lg:rounded-2xl rounded-xl bg-white md:rounded-2xl flex flex-col justify-center items-center  w-full h-full lg:p-3  ">
            <img class="lg:w-20 w-15 animate__animated animate__fadeInDown" src="https://cdn-icons-png.flaticon.com/512/295/295128.png" alt="Login img">
            <h1 class="lg:text-5xl md:text-4xl text-2xl font-bold lg:p-3 p-2text-black">Welcome back</h1>
            <h3 class="text-gray-700 lg:text-lg text-sm font-semibold lg:p-2 p-1" >Login to your account to continue</h3>
            <form class="flex flex-col lg:gap-3 lg:m-4 gap-2 m-3  " onsubmit="log(event)">
                <input id="email" class="border border-3 border-gray-600 rounded-xl lg:p-3 p-2   text-black  focus:ring-3 focus:ring-blue-600  " type="email" placeholder="Email address" required>
                <div class="flex border border-3 border-gray-600 rounded-xl focus-within:ring-2 focus-within:ring-blue-600 justify-center items-center ">
                        <input id="password" class="flex-1   rounded-xl lg:p-3  p-2  text-black   focus:outline-none" type="password" placeholder="Password" required >
                        <i class="ri-eye-line px-1 lg:text-2xl text-xl hover:text-orange-500 cursor-pointer hover:scale-110 duration-300 ease-in-out" onclick="seticon(this)"></i>
                    </div>
                <div class="flex gap-5  lg:gap-18 justify-center items-center lg:m-2 font-semibold ">
                    <div class="flex items-center justify-center lg:gap-2 gap-1">
                         <input  type="checkbox" class="lg:w-4 w-3 h-3 lg:h-4 " >
                        <label for="remember" class="text-gray-700 lg:text-lg text-sm">Remember me</label>
                    </div>
                    <button class="text-blue-600 lg:text-lg text-sm hover:text-orange-600" onclick="forgetpassword()">Forgot password?</button>
                </div>
                <button class=" bg-blue-600 lg:p-3 p-2 lg:rounded-xl rounded-lg text-white font-bold lg:text-xl text-lg hover:bg-orange-600 hover:scale-105 duration-300 ease-in-out">Login</button>
                <h1 class="flex justify-center gap-2 font-semibold lg:text-lg text-sm mt-3 text-gray-700">Don't have an account?<button class="text-blue-600 hover:text-orange-500 " onclick="signup()">Signup</button></h1>
            </form>
        </div>`,
        
        showConfirmButton:false,
       
       
        
    });
}

const seticon=(i)=>{
    const pass=document.getElementById("password")
    if(pass.type==="password"){
        pass.type="text"
        i.classList.add("ri-eye-line")
        i.classList.remove("ri-eye-off-line")
    }
    else{
        pass.type="password"
        i.classList.add("ri-eye-off-line")
        i.classList.remove("ri-eye-line")
    }

}
 
const log=(e)=>{
    e.preventDefault()
    const email=document.getElementById("email").value.trim()
    const password=document.getElementById("password").value.trim()

    const user=localStorage.getItem(email)
    if(user){
        const userobj= JSON.parse(user)
        if(userobj.password==password){
            location.replace("user.html")
        }
        else{
            swal.fire({
                icon:"error",
                title:"Incorrect Password"
            });
        }
    }
    else{
        swal.fire({
            icon:"error",
            title:"User not found "
        });
    }
}





const signup=()=>{
    swal.fire({
        html:`
            <div class=" flex flex-col justify-center items-center  md:pt-1  bg-white px-4 py-2 lg:rounded-2xl rounded-xl    ">
                <img src="https://i.postimg.cc/BZhSXQK0/login.png" alt="signup img" class="lg:w-20 w-15 sm:pt-10 lg:p-2 animate__animated animate__slideInDown">
            <h1 class="lg:text-5xl text-3xl font-bold text-black pt-1 md:pb-1">Signup</h1>
            <h3 class="lg:text-4xl text-2xl font-semibold lg:pt-4 lg:pb-2 pt-1 text-gray-700 md:p-0">Create account</h3>
            <form class="flex flex-col lg:m-4 m-3 lg:gap-3  gap-2" onsubmit="setaccount(event)">
                <input id="name" type="text" placeholder="Full name" class="border lg:p-3 p-2 rounded-xl  text-black  focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required>
                <input id="email" type="email" placeholder="Email address" class="border lg:p-3 p-2 rounded-xl  text-black  focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required>
                <input id="password" type="password" placeholder="Password" class="border lg:p-3 p-2 rounded-xl  text-black focus:ring-3 focus:ring-blue-600 border-3 border-gray-600" required>
                 <input id="confirm" type="password" placeholder="Confirm Password" class="border lg:p-3 p-2 rounded-xl  text-black focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required> 
                <div class=" mt-1 lg:p-3    text-black  flex  justify-center ">
                <input id="terms" type="checkbox" required class=" lg:w-5 lg:h-5 w-4 h-4 mt-[3px]">
                <label class="text-gray-700 font-semibold text-sm lg:text-xl ">I agree to the <a href="#" class="text-blue-600 hover:text-orange-600"
                    >Terms of Service</a> and <a href="#" class="text-blue-600 hover:text-orange-600"
                    >Privacy Policy</a> </label>
                </div>
                <button class=" bg-blue-600 hover:bg-orange-600 lg:p-3 p-2 text-white font-bold lg:rounded-xl  rounded-lg lg:text-lg text-md mt-3 mb-1 md:mt-1 md:mb-0 hover:scale-105 duration-300 ease-in-out" >Create Account</button>
                <h2 class="flex justify-center gap-2 text-gray-700 font-semibold lg:text-xl text-sm md:mb-3">Already have an account?<button onclick="login()" class="text-blue-600 hover:text-orange-600 ">Login</button></h2>
            </form>
            </div>
        </div>
    </div>
    `,
        showConfirmButton:false,
       
        
    })
}

const setaccount=(e)=>{
    e.preventDefault()
    const fullname = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()


 
  const put={
    fullname: fullname,
    email: email,
    password: password

  };

   localStorage.setItem(email, JSON.stringify(put))

   swal.fire({
        icon:"success",
        title:"Signup Success"
    });

}






 
const forgetpassword=()=>{
    Swal.fire({
        html:`
            <div class=" lg:rounded-2xl rounded-xl bg-white md:rounded-2xl flex flex-col justify-center items-center  w-full h-full p-3">
            <img class="lg:w-25 w-15 rounded-lg animate__animated animate__wobble" src="https://cdn3d.iconscout.com/3d/premium/thumb/reset-password-3d-icon-png-download-8341655.png?f=webp" alt="resetpassword img">
            <h1 class="lg:text-4xl md:text-4xl text-2xl font-bold lg:p-2 p-1 text-black">Reset Password</h1>
            <h3 class="text-gray-700 lg:text-lg text-md font-semibold lg:p-2 p-1" >Reset your password</h3>
            <form class="flex flex-col lg:gap-3 m-3 gap-2" onsubmit="setpass(event)" >
                <input id="resetemail" class="border border-3 border-gray-600 lg:rounded-xl rounded-lg  lg:p-3 p-2  text-black  focus:ring-3 focus:ring-blue-600  " type="email" placeholder="Email address" required>
                <input id="resetpass" class="border border-3 border-gray-600 lg:rounded-xl rounded-lg  lg:p-3 p-2  text-black   focus:ring-3 focus:ring-blue-600 " type="password" placeholder="New Password" required>
                <button  class=" bg-blue-600 lg:p-3 p-2 rounded-xl text-white font-bold lg:text-xl text-lg hover:bg-orange-600 hover:scale-105 duration-300 ease-in-out">Set Password</button>
               <button  class="text-blue-600 hover:text-orange-500 font-semibold lg:text-xl text-lg" onclick="login()">Login</button>
            </form>
        </div>`,
        
        showConfirmButton:false,
    });
}

const setpass=(e)=>{
    e.preventDefault()
    const resetemail =document.getElementById("resetemail").value.trim()
    const resetpass=document.getElementById("resetpass").value.trim()
    const getemail = JSON.parse(localStorage.getItem(resetemail))
    if(getemail){
        getemail.password=resetpass;
        localStorage.setItem(resetemail,JSON.stringify(getemail))
        swal.fire({
        icon:"success",
        title:"Password Change Successfully"
    });

    }
    else{
        swal.fire({
            icon:"error",
            title:"Email Not Match"
        });
    }
    
     
}



const loc=()=>{
    Swal.fire({
        html:`
            <div class=" lg:rounded-2xl rounded-xl bg-white md:rounded-2xl flex flex-col justify-center items-center  w-full h-full lg:p-4 p-2.5">
            <img class="lg:w-20 w-15 animate__animated animate__bounceIn" src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png" alt="Location img">
            <h1 class="lg:text-5xl md:text-4xl text-2xl font-bold lg:p-3 p-1 text-black">Location</h1>
            <h3 class="text-gray-700 lg:text-lg text-sm font-semibold lg:p-2 p-1" >Enter your current Location</h3>
            <form class="flex flex-col lg:gap-4 lg:m-4 gap-2 m-2 ">
                <input id="address" class="border border-3 border-gray-600 lg:rounded-xl lg:p-3  rounded-lg p-1.5 text-black  focus:ring-3 focus:ring-blue-600  " type="text" placeholder="Enter your address">
                <div class="flex  itmes-center justify-center lg:gap-2  gap-1">
                         <input  type="checkbox" class="lg:w-4 lg:h-4 h-3 w-3 mt-1.5 " >
                        <label for="remember" class="text-gray-800 lg:text-lg text-md">Use current location</label>
                    </div>
                <button class=" bg-blue-600 lg:p-3 px-3 py-2 lg:rounded-xl rounded-lg text-white font-bold lg:text-xl text-lg hover:bg-orange-600 hover:scale-105 duration-300 ease-in-out" onclick="message()">Submit</button>
            </form>
        </div>`,
        
        showConfirmButton:false,
        
    });
}
const message=()=>{
    const addr = Swal.getPopup().querySelector("#address").value
    if (!addr) {
        Swal.fire({
            icon:"warning",
            title: "Please fill address",
            html:`<button class="text-blue-600 hover:text-orange-600 font-semibold text-xl" onclick="loc()">Try again</button>`,
            showConfirmButton:false
        });
        return;
    }
    
Swal.fire({
  title: "Location saved",
  icon: "success",
  });
}

const logout=()=>{

    location.replace("index.html");
    
}

const showside = () => {
    const sdebar = document.getElementById("side");
    sdebar.classList.toggle("translate-x-full"); 
    sdebar.classList.toggle("translate-x-0");    
  }


  const address=()=>{
    swal.fire({
        html:`<div class=" flex flex-col justify-center items-center  md:pt-1  bg-white px-4 py-2 lg:rounded-2xl rounded-xl    ">
                <img src="https://cdn-icons-png.freepik.com/512/4821/4821951.png" alt="signup img" class="lg:w-20 w-15 sm:pt-10 lg:p-2 animate__animated animate__slideInDown">
            <h1 class="lg:text-5xl text-3xl font-bold text-black pt-1 md:pb-1">Add Address</h1>
            
            <form class="flex flex-col lg:m-4 m-3 lg:gap-3  gap-2" onsubmit="setaccount(event)">
                <input id="name" type="text" placeholder="*Full name" class="border lg:p-3 p-2 rounded-xl  text-black  focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required>
                <input id="address_1" type="text" placeholder="*Address Line 1" class="border lg:p-3 p-2 rounded-xl  text-black  focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required>
                <input id="address_2" type="text" placeholder="Address Line 2" class="border lg:p-3 p-2 rounded-xl  text-black  focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " >
                <input id="city" type="text" placeholder="*Enter Your City" class="border lg:p-3 p-2 rounded-xl  text-black focus:ring-3 focus:ring-blue-600 border-3 border-gray-600" required>
                 <input id="state" type="text" placeholder="*State/Province/Region " class="border lg:p-3 p-2 rounded-xl  text-black focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required> 
                 <input id="pincode" type="text" placeholder="*Zip/Pincode" class="border lg:p-3 p-2 rounded-xl  text-black  focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required>
                
                <button class=" bg-blue-600 hover:bg-orange-600 lg:p-3 p-2 text-white font-bold lg:rounded-xl  rounded-lg lg:text-lg text-md mt-3 mb-1 md:mt-1 md:mb-0 hover:scale-105 duration-300 ease-in-out" onclick="add_address()">Add Address</button>
                
            </form>
            </div>
        </div>
    </div>`,
    showConfirmButton:false
    });
    
  }

   const add_address=()=>{
    swal.fire({
        icon: "success",
        title: "Address Saved Successfully",
    })
   }

   
const displayName = () => {
    
    const userData = JSON.parse(localStorage.getItem(email));
    console.log(userData)
}

window.onload=displayName;
