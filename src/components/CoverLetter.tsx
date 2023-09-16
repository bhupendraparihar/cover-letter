import { useContext } from 'react';
import AppState from '../Store';

function CoverLetter() {
  const { orgName, role } = useContext(AppState);

  return (
    <div className="preview" contentEditable="true">
      <p>Hi,</p>

      <p>
        I am writing to express my keen interest in the {role} role at {orgName}
        , as advertised on LinkedIn. With over 14 years of experience in the
        field of Full Stack Development and a strong foundation in Computer
        Science, I am excited about the opportunity to contribute my expertise
        to your esteemed team.
      </p>

      <p>
        Throughout my journey, I have acquired in-depth knowledge of hand-coded
        HTML5, CSS3, and Object-Oriented JavaScript (OOJS), enabling me to craft
        seamless and engaging user experiences. My proficiency extends to
        various Front End Architecture paradigms, including Monolithic and
        Micro-Frontend approaches. I have successfully developed and deployed
        React applications, harnessing the power of state-management frameworks
        like Redux (leveraging middlewares such as Thunk/Saga) to ensure
        scalable and maintainable codebases.
      </p>

      <p>
        My hands-on experience with Node.js has not only allowed me to build
        efficient backend systems but has also equipped me with the ability to
        set up frontend build systems, automating workflows with tools like
        Grunt and Gulp. My expertise in JavaScript design patterns has proven
        invaluable in architecting robust applications that are both flexible
        and maintainable.
      </p>

      <p>
        In addition, I am well-versed in Test-Driven Development (TDD),
        utilizing frameworks like Jest, React Testing Library, Jasmine, and
        Mocha to ensure code quality and reliability. I am proficient in
        leveraging Performance and Security tools to optimize web applications
        and deliver secure user experiences.
      </p>

      <p>
        My background in responsive web design, including fluid grids and
        frameworks like Bootstrap, empowers me to create adaptive and accessible
        websites. My understanding of SEO and accessibility standards, along
        with my hands-on experience with client-side templating languages,
        contributes to building applications that are inclusive and
        user-friendly.
      </p>

      <p>
        Moreover, my familiarity with MV\* frameworks such as AngularJS and
        Backbone.js, combined with my knowledge of common JavaScript design
        patterns, enhances my ability to tackle complex challenges and
        collaborate effectively with cross-functional teams.
      </p>

      <p>
        Having had the privilege of working on large branded websites, content
        management systems, E-commerce platforms, and backend frameworks, I
        believe my diverse experience aligns well with the needs of {orgName}. I
        am excited about the possibility of contributing to your projects and
        furthering the company's mission.
      </p>
      <p>
        Thank you for considering my application. I am eager to discuss how my
        skills and experience align with your requirements in more detail.
        Please feel free to contact me at 9008008084 or
        bhupendrasparihar@gmail.com . I look forward to the opportunity to
        demonstrate how I can contribute to the success of {orgName}.
      </p>

      <p>Sincerely,</p>

      <p>Bhupendra Parihar</p>
    </div>
  );
}

export default CoverLetter;
