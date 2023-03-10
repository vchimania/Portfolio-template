import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement 
    contentStyle={{ backgroundColor: "rgba(128, 128, 128, 0.3)", color: "#fff", boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)", backdropFilter:"blur(5px)" }}
    contentArrowStyle={{ borderRight: '7px solid #F7A8A1' }}
    date={exp.date}
    iconStyle={{ background: exp.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={exp.icon} alt={exp.company_name} className="w-60% h-60% object-contain rounded-full" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
      <p className="text-secondary text-[16px] font-semibold">{exp.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {exp.points.map((point, index) => (
          <li
            key={`exp-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far...</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp,index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")