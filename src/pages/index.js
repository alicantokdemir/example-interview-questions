import React, { useState, useMemo } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Container from "../components/container";
import Card from "../components/card";
import Sidebar from "../components/sidebar";
import SEO from "../components/seo";

import { questionsData } from '../data/questions';

const sidebarItems = [
  { text: 'Javascript', value: 'javascript' },
  { text: 'HTML/CSS', value: 'htmlCss' },
];

const IndexPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(sidebarItems[0].value);

  const questions = useMemo(() => questionsData[selectedCategory], [selectedCategory]);

  return (
    <Layout>
      <SEO title="Home" />
      <Container className="w-20">
        <Sidebar onItemChange={setSelectedCategory} items={sidebarItems} />
      </Container>
      <Container className="w-80">
        {questions.map((q, i) => (
          <Card key={i} className="mb-25" title={q.q} answer={q.a} />
        ))}
      </Container>
      {/* <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  );
};

export default IndexPage;
