import React from "react";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {

  const handleEmailClick = () => {
    const email = "imatik513@gmail.com";
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      "Hi, I visited your portfolio and want to contact you."
    );

    // Gmail compose link
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    // mailto fallback
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Try Gmail first
    const newWindow = window.open(gmailLink, "_blank");

    // যদি popup block হয় বা Gmail login না থাকে → fallback
    if (!newWindow) {
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">

          {/* LEFT IMAGE */}
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="card1">
              <LightSpeed>
                <img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                  alt="contact"
                  className="image"
                />
              </LightSpeed>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6">
            <Rotate>
              <div className="card2 d-flex flex-column border-0 px-4 py-5">

                <h5>
                  Contact With

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "10px" }}
                  >
                    <BsLinkedin color="blue" size={28} />
                  </a>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "10px" }}
                  >
                    <BsGithub color="black" size={28} />
                  </a>
                </h5>

                {/* BUTTON */}
                <button
                  onClick={handleEmailClick}
                  className="btn btn-primary mt-4"
                  style={{
                    padding: "12px",
                    fontWeight: "bold",
                    borderRadius: "8px"
                  }}
                >
                  📩 Click Me to Contact
                </button>

              </div>
            </Rotate>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;