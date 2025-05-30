import { Accordion } from '../../components/base';
import { ContentContainer, MainContainer } from "../../components/containers";

import faq from "../../constants/faq.json"

const HowItWorksPage = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <div className='flex flex-col gap-4'>
        {faq.data.map((el, i) =>
          <Accordion title={el.title} key={i}>
            <div dangerouslySetInnerHTML={{ __html: el.description }} />
          </Accordion>
        )}

        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default HowItWorksPage;
