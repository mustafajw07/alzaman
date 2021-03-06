import Wrapper from "../../asserts/styles/contact/Form";

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
				<div className="styled-input wide">
					<label className="form-label">Message</label>
					<textarea name="messeage"></textarea>
				</div>
        <button><a href="#" className="btn-flip" data-back="Submit" data-front="Ready?"></a></button>
      </form>
      </div>
    </Wrapper>
  </>;
}

export default Form;
