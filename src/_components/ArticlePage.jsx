import React from "react";
import styled from "styled-components";

import { MDBIcon } from "mdbreact";

// import ArticleList from "../components/ArticleList";
// import articleContent from "./article-content";
// import NotPageFound from "./NotPageFound";

import { Data } from "../_components/PortfolioData";
import Carrousel from "../_components/Carrousel";

import { H3, P } from "../Layout";

const Title = styled.div`
  i{
    cursor:pointer;
    align-self: center;
  }
  grid-column-gap: 0.5rem;
  display:grid;
  grid-template-columns: auto 1fr;
`;

const Container = styled.div`
  padding: 0 1rem;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
`;

const ArticlePage = ({ match, ...props }) => {
  const name = match.params.name;
  const article = Data.find((article) => article.name === name);

  //   const otherArticles = Data.filter(
  //     (article) => article.name !== name
  //   );

  //   if (!article) return <NotPageFound />;

  return (
    <Container>
      <Title>
        <MDBIcon onClick={() => props.history.goBack()} icon="arrow-left" />
        <H3 left>{article.name}</H3>
      </Title>
      <Carrousel bannerData={article.carrosel} />
      <Info>
        <P bold>Autor</P>
        <P right>{article.author}</P>
      </Info>
      <Info>
        <P bold>Cliente</P>
        <P right>{article.company}</P>
      </Info>
      <Info>
        <P bold>País</P>
        <P right>{article.country}</P>
      </Info>
      <Info>
        <P bold>Habilidades</P>
        <P right>{article.skills}</P>
      </Info>
      
      <Info>
        <P bold>Descripción</P>
        <P right>{article.tech}</P>
      </Info>
      <Info>
        <P bold>Herramientas</P>
        <P right>{article.soft}</P>
      </Info>
      {article.link && (
        <Info>
          <P>Link</P>
          <P right>{article.link}</P>
        </Info>
      )}
      {/* <h3>Other Aricles</h3>
      <ArticleList articles={otherArticles} /> */}
    </Container>
  );
};

export default ArticlePage;
