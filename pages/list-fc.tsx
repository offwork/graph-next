import * as React from 'react';
import { NextPageContext } from 'next';
import Layout from '../components/Layout';
import List from '../components/List';
import IDataObject from '../interfaces';

type Props = {
  items: IDataObject[],
};

const ListFunction = ({ items }) => (
  <Layout title="List Example (with Function Components) | Next.js + TypeScript Example">
    <List items={items} />
  </Layout>
);

ListFunction.getInitialProps = async({ pathname }: NextPageContext) => {
  const dataArray: IDataObject[] = [
    { id: 101, name: 'Larry' },
    { id: 102, name: 'Sam' },
    { id: 103, name: 'Jill' },
    { id: 104, name: pathname },
  ];

  return { items: dataArray };
};

export default ListFunction;
