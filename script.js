 const input = document.querySelector("input");
      const message = document.querySelector(".message");
      const show = document.querySelector(".show");

      let WeakPassword = /[a-z]/;
      let MediumPassword = /\d+/;
      let StrongPassword = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

      function run() {
        if (input.value !== "") {
            
           
          if (
            input.value.length <= 3 &&
            (input.value.match(WeakPassword) ||
              input.value.match(MediumPassword) ||
              input.value.match(StrongPassword))
          ) {
            message.textContent = "Your password is too weak";
            message.style.color="red"
          } else if (
            input.value.length > 3 &&
            input.value.match(WeakPassword) &&
            input.value.match(MediumPassword)
          ) {
            message.textContent = "Your password is medium";
            message.style.color="orange"
          }
          if (
            input.value.length > 8 &&
            input.value.match(WeakPassword) &&
            input.value.match(MediumPassword) &&
            input.value.match(StrongPassword)
          ) {
            message.textContent = "Your password is strong";
            message.style.color="green"
          }
        
        }
        else{
            
            message.textContent=""
        }
        
        
      }

      const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });
