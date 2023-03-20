import styled from "styled-components";

const MainContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 2% auto 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PresentationContainer = styled.div``;

const PresentationName = styled.h2`
  color: white;
  font-size: 48px;
  padding-top: 1rem;
  margin-bottom: -0.75rem;
`;

const PresentationCourse = styled.h3`
  align-items: right;
  color: white;
  font-size: 16px;
`;

const PortfolioHeader = styled.h4`
  font-size: 24px;
  color: #94a3b0;
  margin-top: -0.75rem;
  border-bottom: 2px solid #94a3b0;
`;

const ProjectsContainer = styled.div`
  justify-content: center;
  margin: auto;
  backgroud: white;
`;

const Footer = styled.div`
  width: 100%;
  margintop: 5%;
  background: #3a4b59;
  height: 150px;
  align-items: center;
  display: flex;
  margin: 5% auto 0 auto;
  justify-content: center;
`;

const FooterContent = styled.a`
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin: 4%;
  text-decoration: none;
  transition: all 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    color: #80aff2;
    text-decoration: underline;
  }
`;

export {
  MainContainer,
  TitleContainer,
  PresentationName,
  PresentationCourse,
  PresentationContainer,
  ProjectsContainer,
  PortfolioHeader,
  Footer,
  FooterContent,
};
