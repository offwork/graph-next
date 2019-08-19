import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + Typescript Example">
    <p>This is About Page</p>
    <p><Link href='/'><a>Go Home</a></Link> This is About Page</p>
  </Layout>
);

export default AboutPage;
