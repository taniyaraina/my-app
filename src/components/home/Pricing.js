import react from 'react'
import Heading from '../atoms/Heading'
import Container from '../atoms/Container'

const pricing = {
  tiers: [
    {
      title: 'Basic',
      price: 25,
      frequency: 'per month',
      description:
        'Interior Design Project Discussion Space Planning Online Consultation',
      cta: 'Buy Now',
      bgColor: false,
    },
    {
      title: 'Standard',
      price: 50,
      frequency: 'per month',
      description:
        'Color Analysis \n Space Planning Home Remodeling 3D Interior Model',
      cta: 'Buy Now',
      bgColor: true,
    },
    {
      title: 'Premium',
      price: 80,
      frequency: 'per month',
      description:
        'Concept Development Decoration Services Interior Architecture Flooring Installation',
      cta: 'Buy Now',
      bgColor: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Pricing = () => (
  <Container>
    <Heading textCenter>
      Our <span className="colorPrimary">Pricing</span>
    </Heading>

    {/* Tiers */}
    <div className="mt-24 text-center space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
      {pricing.tiers.map((tier) => (
        <div
          key={tier.title}
          className={`relative flex flex-col rounded-br borderBottomRightNone lightBorder ${
            tier.bgColor ? 'bgDarkYellow' : 'bgLightYellow'
          } p-8 shadow-sm`}
        >
          <div className="flex-1">
            <h3
              className={`text-2xl font-normal text-gray-900 ${
                tier.bgColor ? 'text-white' : ''
              }`}
            >
              {tier.title}
            </h3>
            <p className="mt-10 text-gray-900">
              <span
                className={`text-5xl font-bold ${
                  tier.bgColor ? 'text-white' : ''
                }`}
              >
                ${tier.price}
              </span>
            </p>
            <p className="mt-4 textLite">
              <span className="ml-1 text-lg font-normal leading-4">
                {tier.frequency}
              </span>
            </p>
            <div
              className={`mx-6 my-10 border ${
                tier.bgColor ? 'border-white' : 'lineColor'
              }`}
            />
            <p
              className={`mt-6 font-medium leading-7 ${
                tier.bgColor ? 'text-white' : ''
              }`}
            >
              {tier.description}
            </p>
          </div>
          <a
            href="#"
            className={classNames(
              tier.bgColor
                ? 'bg-white textSecondaryColor'
                : 'bgDarkYellow text-white',
              'mt-8 block w-7/12 py-3 self-center border border-transparent rounded-lg text-center font-bold uppercase',
            )}
          >
            {tier.cta}
          </a>
        </div>
      ))}
    </div>
  </Container>
)

export default Pricing
