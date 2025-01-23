import React from 'react';
import SectionContainer from '../components/layouts/section-container';
import SpotLightCard from '../components/SpotLightCard'; // Adjust the import path if necessary

export default function WorkPage() {
  const experiences = [
    {
        role: 'Co-Organizer',
        company: 'Tensorflow User Group Prayagraj',
        duration: 'Feb’24- Present (Part-Time)',
        description: '◦ Conducting and delivering various boot camps which impact over 1,200+ developers.\n ◦ Orchestrated the development of various projects and facilitated immersive technical workshops.',
      },
    {
      role: 'Open Source Contributor',
      company: 'Wikimedia Foundation',
      duration: 'Feb’24- Present (Remote Contributor)',
      description: '◦ Contributing to Wikimedia Foundation’s open-source projects including Wikipedia and Mediawiki.\n ◦ Leading a team of developers to develop scalable solutions for Wikimedia Foundation.',
    },
    {
      role: 'SDE Intern',
      company: 'Grinler',
      duration: ' Sep’24- Nov’24 (Internship)',
      description: '◦ Created web pages using ReactJS and Tailwind CSS, reducing load times by 45%.\n ◦ Integrated RESTful APIs with Node.js and Express.js, which drove a 35% increase in user retention and served 2,000+ users.',
    },
    {
      role: 'Technical Lead',
      company: 'Google Developer Group- Prayagraj',
      duration: 'Dec’23- Aug’24 (Part-Time)',
      description: '◦ Spearheaded technical workshops on various emerging technologies.\n◦ Designed and delivered hands-on coding sessions for the developer community having 1500+ members.',
    },
    {
      role: 'Chapter Founder & Lead',
      company: 'Google Developer Student Clubs',
      duration: 'Aug’23- July’24 (Ambassadorship)',
      description: '◦ Managed a campus developer community.\n ◦ Conducted online and offline technical & soft-skills training impacting more than 700 students.',
    },
  ];

  const renderDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <SectionContainer>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Work Experience
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My Professional Journey and Key Contributions
            </p>
        </div>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <SpotLightCard
            key={index}
            className="custom-spotlight-card"
            spotlightColor="rgba(255, 255, 255, 0.2)"
          >
            <i className="fa fa-briefcase mb-2 text-2xl text-gray-400" />
            <h2 className="text-xl font-semibold dark:text-gray-100 text-gray-900">
              {exp.role} @ {exp.company}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
            <p className="mt-2 text-base dark:text-gray-300 text-gray-700">
              {renderDescription(exp.description)}
            </p>
            {/* <button className="mt-3 inline-block rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600">
              Learn more
            </button> */}
          </SpotLightCard>
        ))}
      </div>
    </SectionContainer>
  );
}