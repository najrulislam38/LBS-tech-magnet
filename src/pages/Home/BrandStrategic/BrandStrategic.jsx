import Container from "../../../components/Container";
import Title from "../../../components/Title";
import "./BrandStrategic.css";

const BrandStrategic = () => {
  return (
    <div className="strategic ">
      <Container>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-32 pt-10">
          <div className="md:flex-1">
            <Title Title={"PROVEN FRAMEWORK FOR SUCCESS YOUR BUSINESS!"} />
            <p className="mt-10 mb-6">
              Are you looking to attract clients who will value your product or
              service and be happy to pay for it?
            </p>
            <p>
              Our four-step framework can solve your biggest challenges in sales
              and marketing. Our experts will help you scale your business,
              multiply customers’ lifetime, and increase your market value.
            </p>
          </div>
          <div className="md:flex-1">
            <div className="collapse collapse-plus text-secondary ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-lg  font-medium ">
                Brand Strategy
              </div>
              <div className="collapse-content text-white">
                <p className="mb-5">
                  Your branding strategy is the foundation of building a solid
                  brand and achieving success. At First, it is essential to
                  understand the purpose of your business and its position in
                  the market.
                </p>
                <p>
                  We will cooperate to identify your target audience’s most
                  significant challenges, desires, and emotions. Next, we will
                  create a reflective and informative branding strategy to
                  impact your audience positively.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus text-secondary ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-lg font-medium ">
                Brand Development
              </div>
              <div className="collapse-content text-white">
                <p className="mb-5">
                  We work to develop a magnetic brand image with an artistic
                  framework and visual identity.
                </p>
                <p>
                  Our proprietary branding process ensures you can create the
                  most effective branding for your company, which will attract
                  your ideal customers and improve conversion rates.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus text-secondary">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-lg font-medium">
                Brand Experience
              </div>
              <div className="collapse-content text-white">
                <p className="mb-5">
                  It is time to perfect the customer experience. Our expert team
                  is dedicated to optimizing every aspect of your brand, from
                  web design to packaging design.
                </p>
                <p>
                  We’ll ensure that every Touchpoint and website will make the
                  brand experience remarkable for you and your customers.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus text-secondary ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-lg font-medium">
                Brand Promotion
              </div>
              <div className="collapse-content text-white">
                <p className="mb-5">
                  To create a strong brand awareness, people must know about
                  your existence. We will assist you in selecting the most
                  effective organic, paid, and strategic partnership channels.
                  We will give you the necessary tools to become magnetic with
                  your Marketing. Our efforts will help you maximize your brand
                  equity and value.
                </p>
                <p>
                  We will give you the necessary tools to become magnetic with
                  your Marketing. Our efforts will help you maximize your brand
                  equity and value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandStrategic;
