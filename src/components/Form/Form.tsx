const Form = (): JSX.Element => {
  return (
    <>
      <h3>Register for the event</h3>
      <form>
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Introduce your email"
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Introduce your password"
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            Image
            <input
              type="file"
              name="image"
              placeholder="Introduce an image"
              accept="image/png, image/jpeg"
            ></input>
          </label>
        </div>
        <button>Sign Up</button>
      </form>
    </>
  );
};

export default Form;
