import ResumeHeader from "./ResumeHeader";
import resumeData, { ResumeDataItem } from "./ResumeData";
import { motion } from "framer-motion";

const ResumePage = () => {

  const itemSummary = (item: ResumeDataItem) => {
    if (item.summary) {
      if (Array.isArray(item.summary)) {
        return item.summary.map((summary, summaryIndex) => (
          <li key={summaryIndex}>{summary}</li>
        ));
      } else {
        return (
          <>
            {item.summary}
          </>
        );
      }
    }
    return (<></>);
  }

  return (
    <div className="resume-container page">
      <ResumeHeader />
      <div className="resume-section-container">
        {resumeData.map((section, sectionIndex) => (
          <motion.div
            className="resume-section"
            key={sectionIndex}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: sectionIndex * 0.15, duration: 0.5 }}
          >

            <div className="resume-section-title">{section.name}</div>
            <div className="resume-section-content">

              {section.items.map((item: ResumeDataItem, itemIndex) => (
                <div className="resume-section-item" key={itemIndex}>
                  <div className="resume-item-header">
                    <div className="resume-section-image">
                      <img loading="lazy"src={item.image} alt={item.title} />
                    </div>
                    <div className="resume-section-text-container">
                      <div className="resume-section-content-title">
                        {item.title}
                      </div>
                      <div className="resume-section-content-subtitle">
                        {item.subtitle}
                      </div>
                      <div className="resume-section-content-description">
                        {Array.isArray(item.description)
                          ? item.description.map((desc, index) => (
                            <div key={index}>{desc}</div>
                          ))
                          : <div>{item.description}</div>
                        }

                      </div>
                    </div>
                  </div>

                  <div className="resume-section-content-summary">
                    {itemSummary(item)}
                  </div>
                </div>

              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default ResumePage;
