import { Card } from '../../components/base';
import { ContentContainer, MainContainer } from "../../components/containers";

import faq from "../../constants/faq.json"

const HowItWorksPage = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <div className='flex flex-col gap-4 mx-auto w-full max-w-sm px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl'>
        {faq.data.map((el, i) =>
          <Card title={el.title} key={i}>
            <div className="[&>strong]:leading-8 [&>strong]:inline-block [&>p]:pb-2" dangerouslySetInnerHTML={{ __html: el.description }} />
          </Card>
        )}

        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default HowItWorksPage;
