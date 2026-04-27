import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

import image1 from '../../assets/docs/a0.png';
import image2 from '../../assets/docs/b0.png';
import image3 from '../../assets/docs/c0.png';
import image4 from '../../assets/docs/d0.png';
import image5 from '../../assets/docs/e0.png';
import image6 from '../../assets/docs/aq.jpg';
import image7 from '../../assets/docs/t.jpg';
import image8 from '../../assets/docs/wine.jpg';

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">

        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>

        <hr />

        <p className="pb-3 text-center">
          I am actively working on end-to-end projects in Machine Learning,
          Natural Language Processing (NLP), Deep Learning (DL), Generative AI
          (GenAI), and Agentic AI systems.
        </p>

        {/* ROW with spacing FIX */}
        <div className="row g-4" id="ads">
          <Spin>

            {/* CARD TEMPLATE START */}

            {/* CARD 1 */}
            <div className="col-md-4 d-flex">
              <div className="card rounded w-100 d-flex flex-column">
                <div className="card-image">
                  <span className="card-notify-badge">ML Project</span>
                  <img src={image1} alt="project1" />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Scikit-learn</span>
                  <span className="card-detail-badge">Regression</span>
                  <span className="card-detail-badge">SQL</span>
                </div>

                <div className="card-body text-center mt-auto">
                  <h6 className="text-uppercase">
                    Vendor Invoice Intelligence
                  </h6>
                  <a
                    className="ad-btn"
                    href="https://github.com/atikhasan007/Vendor_Invoice_Intelligence_System"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-4 d-flex">
              <div className="card rounded w-100 d-flex flex-column">
                <div className="card-image">
                  <span className="card-notify-badge">ML Project</span>
                  <img src={image2} alt="project2" />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">XGBoost</span>
                  <span className="card-detail-badge">CatBoost</span>
                  <span className="card-detail-badge">KNN</span>
                </div>

                <div className="card-body text-center mt-auto">
                  <h6 className="text-uppercase">
                    Visa Approval Prediction
                  </h6>
                  <a className="ad-btn" href="https://github.com/atikhasan007/us-visa-approval-prediction#">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-md-4 d-flex">
              <div className="card rounded w-100 d-flex flex-column">
                <div className="card-image">
                  <span className="card-notify-badge">DL Project</span>
                  <img src={image3} alt="project3" />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">TensorFlow</span>
                  <span className="card-detail-badge">CNN</span>
                </div>

                <div className="card-body text-center mt-auto">
                  <h6 className="text-uppercase">
                    Chicken Disease Detection
                  </h6>
                  <a className="ad-btn" href="https://github.com/atikhasan007/Chicken-Disease-Classification#">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-md-4 d-flex">
              <div className="card rounded w-100 d-flex flex-column">
                <div className="card-image">
                  <span className="card-notify-badge">CV</span>
                  <img src={image4} alt="project4" />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">OpenCV</span>
                  <span className="card-detail-badge">Gradio</span>
                </div>

                <div className="card-body text-center mt-auto">
                  <h6 className="text-uppercase">
                    Face Detection
                  </h6>
                  <a className="ad-btn" href="https://github.com/atikhasan007/-Face-Detection-Gradio">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="col-md-4 d-flex">
              <div className="card rounded w-100 d-flex flex-column">
                <div className="card-image">
                  <span className="card-notify-badge">Gen AI</span>
                  <img src={image5} alt="project5" />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">GPT-4o</span>
                  <span className="card-detail-badge">RAG</span>
                </div>

                <div className="card-body text-center mt-auto">
                  <h6 className="text-uppercase">
                    Medical Chatbot
                  </h6>
                  <a className="ad-btn" href="https://github.com/atikhasan007/Medical-Chatbot-">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="col-md-4 d-flex">
              <div className="card rounded w-100 d-flex flex-column">
                <div className="card-image">
                  <span className="card-notify-badge">Gen AI</span>
                  <img src={image6} alt="project6" />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">LangChain</span>
                  <span className="card-detail-badge">VectorDB</span>
                </div>

                <div className="card-body text-center mt-auto">
                  <h6 className="text-uppercase">
                    Q&A Chatbot
                  </h6>
                  <a className="ad-btn" href="https://github.com/atikhasan007/Generative-AI/tree/main/07-Level%202%20Apps%20(POC)/07-Level%202%20Apps%20(POC)/Interview-question-creator">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 7 */}
            <div className="col-md-4 d-flex">
              <div className="card rounded w-100 d-flex flex-column">
                <div className="card-image">
                  <span className="card-notify-badge">Gen AI</span>
                  <img src={image7} alt="project7" />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Aiogram</span>
                  <span className="card-detail-badge">Gemini API</span>
                </div>

                <div className="card-body text-center mt-auto">
                  <h6 className="text-uppercase">
                    Telegram Bot
                  </h6>
                  <a className="ad-btn" href="https://github.com/atikhasan007/Telegram-chatbot">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 8 */}
            <div className="col-md-4 d-flex">
              <div className="card rounded w-100 d-flex flex-column">
                <div className="card-image">
                  <span className="card-notify-badge">ML</span>
                  <img src={image8} alt="project8" />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Flask</span>
                  <span className="card-detail-badge">ElasticNet</span>
                </div>

                <div className="card-body text-center mt-auto">
                  <h6 className="text-uppercase">
                    Wine Quality Prediction
                  </h6>
                  <a className="ad-btn" href="https://github.com/atikhasan007/Wine-Quality-Prediction">
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* CARD TEMPLATE END */}

          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;