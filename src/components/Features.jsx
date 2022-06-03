/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Across 180+ countries',
    description:
      'With presence in over 180+ countries, we got you covered wherever you might be.',
    icon: GlobeAltIcon,
  },
  {
    name: '100% transparent',
    description:
      'Our fees and charges are 100% transparent. Be rest assured that there are no hidden fees or charges',
    icon: ScaleIcon,
  },
  {
    name: 'Hassle Free',
    description:
      'Sending money to loved ones and business partners internationally should not be a hassle! we make the process seamless for you!',
    icon: LightningBoltIcon,
  },
  {
    name: 'Multi currency Wallet',
    description:
      'We provide you with a multi-currency wallet. Convert your local currencies into any foreign currency and carry out cross-border transactions in seconds',
    icon: AnnotationIcon,
  },
]

export default function Example() {
  return (
    <div className="py-12 bg-white -mt-10 lg:mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-[#23036A] sm:text-4xl">
            A better way to send money
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#23036A] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 lg:text-2xl text-lg leading-6 font-medium font-bold text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-lg text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
