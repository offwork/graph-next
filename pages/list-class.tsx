import * as React from 'react';
import { NextPageContext } from 'next';
import Layout from '../components/Layout';
import List from '../components/List';
import IDataObject from '../interfaces';

type Props = {
  items: IDataObject[],
};

class ListClass extends React.Component<Props> {
  static async getInitialProps({ pathname }: NextPageContext) {
    const dataArray: IDataObject[] = [
      { id: 101, name: 'Larry' },
      { id: 102, name: 'Sam' },
      { id: 103, name: 'Jill' },
      { id: 104, name: pathname },
    ];

    return { items: dataArray };
  }

  render() {
    return(
      <Layout title="List Example | Next.js + Typescript">
        <List items={this.props.items} />
      </Layout>
    )
  }
}

export default ListClass;
