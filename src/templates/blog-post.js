import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
// import Typography from "typography";
// import fairyGatesTheme from "typography-theme-fairy-gates";
// const typography = new Typography(fairyGatesTheme);

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="blog">
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
