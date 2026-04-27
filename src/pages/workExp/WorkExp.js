import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                AI/ML Developer (Independent Learning)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Self Project
              </h4>
              <p>
                AI/ML Engineer with skills in deep learning, model building, data analysis,  and project execution.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2020 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Generative AI  (Project-Based Experience)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Self Project
              </h4>
              <p>
              Generative AI Engineer specializing in LLMs, prompt engineering, model fine-tuning, AI agents, and end-to-end AI solution development.
              </p>
            </VerticalTimelineElement>


         


          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
