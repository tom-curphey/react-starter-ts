import React from 'react';
import { Header } from '../../shared/layout';
import { PageLayout } from '../../shared/layout/LayoutStyles';

const Intro = () => {
  return (
    <PageLayout>
      <Header
        heading="Intro"
        subHeading="This is the sub heading of the header section"
      />
    </PageLayout>
  );
};

export default Intro;
