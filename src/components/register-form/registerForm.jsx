import { useState, useEffect } from "react";
import './registerForm.css';
//test google form
//https://docs.google.com/forms/u/0/d/e/1FAIpQLSfTnMFkGoFZ1bQCGAHTP0XAydbNyzlrvFdKuEPi4S_RUY2KWQ/formResponse
//https://docs.google.com/forms/d/e/1FAIpQLScJxB5X1ig6-73qpKK9-PJhJEVCfus9w_YTA0VTDs8z-p_rQQ/formResponse
//ID for name - entry.301235112
//ID for mobile number - entry.1385615279
//ID for Email - entry.1775302109

function RegisterForm({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [PID, setPID] = useState("");
  const [payment_proof, setPayment_proof] = useState("");

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        apiKey: 'YOUR_API_KEY', // Replace with your API key
        clientId: 'YOUR_CLIENT_ID', // Replace with your OAuth client ID
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scope: 'https://www.googleapis.com/auth/drive.file'
      });
    });
  }, []);

  return (

      <div className="register-page">
          <button className="register-close" onClick={onClose}>
            ✕
          </button>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          //adding data into formData
          const formData = new FormData(e.target);

          //question-1 (name)
          formData.append("entry.451532495", name);

          //question-2 (mobile phone)
          formData.append("entry.380867054", email);

          //question-3 (email)
          formData.append("entry.372789283", PID);

          //question-4 (email)
          formData.append("entry.1598884232", year);

          //question-5 (email)
          formData.append("entry.24007369", branch);

          // Upload payment proof to Google Drive
          if (payment_proof) {
            const authInstance = window.gapi.auth2.getAuthInstance();
            if (!authInstance.isSignedIn.get()) {
              await authInstance.signIn();
            }
            const accessToken = authInstance.currentUser.get().getAuthResponse().access_token;
            const metadata = {
              name: payment_proof.name,
              parents: ['YOUR_FOLDER_ID'] // Replace with your Google Drive folder ID
            };
            const formDataUpload = new FormData();
            formDataUpload.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
            formDataUpload.append('file', payment_proof);
            await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${accessToken}`
              },
              body: formDataUpload
            });
          }

          //POST req sent to google form.
          fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLScJxB5X1ig6-73qpKK9-PJhJEVCfus9w_YTA0VTDs8z-p_rQQ/formResponse",
            {
              method: "POST",
              mode: "no-cors",
              body: formData,
            },
          );

          //clearing form input
          setName("");
          setEmail("");
          setPID("");
          setYear("");
          setBranch("");
          setPayment_proof("");
          alert("Form Submitted!");
        }}
      >

          {/* Name */}
        <div className="field">
          <label htmlFor="name">Full Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>

              {/* Email */}
      <div className="field">
        <label htmlFor="email">Student Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@student.sfit.ac.in"
        />
      </div>

      {/* PID */}
      <div className="field">
        <label htmlFor="pid">PID: </label>
        <input
          id="pid"
          type="number"
          value={PID}
          onChange={(e) => setPID(e.target.value)}
          placeholder="Enter PID"
        />
      </div>

      {/* Year */}
      <div className="field">
        <label htmlFor="year">Year: </label>
        <input
          id="year"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="F.E / S.E / T.E / B.E"
        />
      </div>

      {/* Branch */}
      <div className="field">
        <label htmlFor="branch">Branch: </label>
        <input
          id="branch"
          type="text"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          placeholder="Enter Branch"
        />
      </div>

      {/* Payment Proof */}
      <div className="field">
        <label htmlFor="payment">Payment Proof (PDF / Image): </label>
        <input
          id="payment"
          type="file"
          accept="application/pdf,image/*"
          onChange={(e) => setPayment_proof(e.target.files[0])}
        />
      </div>

        <button
          type="submit"
          className="hover:text-blue-600 mx-5 border border-blue-600 px-3 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
      </div>
  );
}

export default RegisterForm;
