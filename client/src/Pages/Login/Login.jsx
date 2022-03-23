import alankar from "../../Images/alankar.svg";
import login_img from "../../Images/login1.svg";

export const Login = () => {
  const handleSubmit = () => {
    console.log("form submitted");
  };
  return (
    <div>
      {/* Alankar Logo */}
      <div>
        <img src={alankar} alt="alankar" />
      </div>

      {/* Side Image */}
      <div>
        <div>
          <img src={login_img} alt="login" />
        </div>
        <div>
          <h2>
            Welcome back, Please login to your <span>Alankar Dashboard</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Enter Email" />
            <br />

            <label>Password</label>
            <input type="email" placeholder="Enter Email" />
            <br />
            <p>Forgot your password?</p>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
