import Wrapper from "../../asserts/styles/Form";

function Form() {
  return <>
  <Wrapper className="full-page">
      <div className="form">
      <form>
        <h3>Get in touch</h3>
        {/* name */}
        <div className="form-box">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input name="name" type="text" id="name"className="form-input" />
        </div>
        {/* email */}
        <div className="form-box">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input name="email" type="text" id="email" className="form-input" />
        </div>
        <div className="col-xs-12">
				<div className="styled-input wide">
					<label htmlFor="message" className="form-label">Message</label>
					<textarea required={true} id="message" name="messeage"></textarea>
				</div>
			</div>
        <div className="text-center">
            <button>Submit</button>
        </div>
      </form>
      </div>
    </Wrapper>
  </>;
}

export default Form;
