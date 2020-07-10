import React, { useState }  from "react"
import axios from "axios";
import Layout from "../../components/layout"


const Contact = () => {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/18f858bd-e827-497b-855f-ce5cb5b3caf1",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Сообщение успешно отправлено !", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <Layout>

      <div>
        <div>
          <h3>Контакты</h3>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1" required="required">Email address</label>
              <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label for="exampleInputName">Name</label>
              <input type="text" name="name" className="form-control" placeholder="Enter your name" required="required"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Message</label>
              <textarea className="form-control" name="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
              Submit
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>
      </div>

    </Layout>

  );
};

export default Contact;