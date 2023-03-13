import styled from "styled-components";

const MainContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 2% auto;
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

export {
  MainContainer,
  TitleContainer,
  PresentationName,
  PresentationCourse,
  PresentationContainer,
  ProjectsContainer,
  PortfolioHeader,
};
