/**
 * LK Autos and Vans — lkautovans.shop
 * LK AUTOS AND VANS LTD, company no. 15623149, Wolverhampton.
 * SIC: 45112 sale of used cars and light motor vehicles;
 *      45200 maintenance and repair of motor vehicles.
 *
 * The site covers both filed activities. It deliberately does not claim to be
 * an MOT testing station: that requires DVSA authorisation, so the copy talks
 * about preparing a vehicle for its test, never about carrying the test out.
 */

export const overrides: Record<string, unknown> = {
  home: {
    seo: {
      title: 'Used cars, vans and vehicle repairs in Wolverhampton',
      description:
        'LK Autos and Vans Ltd, registered in England and Wales (company no. 15623149). Used cars and vans for sale, plus servicing and repairs, in Wolverhampton.',
    },
    hero: {
      eyebrow: 'Sales and repairs, Wolverhampton',
      titleLead: 'Sold properly,',
      titleMark: 'and kept running after',
      lead:
        'We sell used cars and vans, and we fix them. That second part changes how we do the first: a vehicle we would not want back in our own workshop does not go out on our forecourt.',
      secondaryCta: 'What we do',
      visualLabel: 'Registered in England and Wales',
    },
    highlights: {
      eyebrow: 'How we work',
      title: 'Why sales and workshop together matters',
      subtitle: 'Four things that follow from doing both under one roof.',
      items: [
        {
          icon: 'wrench',
          title: 'We see what we sell',
          text: 'Vehicles are looked over by the same people who repair them, so problems are found before a buyer finds them.',
        },
        {
          icon: 'search',
          title: 'Checks you can run yourself',
          text: 'MOT and tax history is public on GOV.UK. Ask for the registration and look before you travel.',
        },
        {
          icon: 'check-doc',
          title: 'Told before it is done',
          text: 'On a repair you get the diagnosis and the cost before work starts, and a call if anything changes.',
        },
        {
          icon: 'van',
          title: 'Vans understood as tools',
          text: 'A work van is a business expense that has to earn its keep. We talk about payload, mileage and running cost, not styling.',
        },
      ],
    },
    services: {
      eyebrow: 'What we do',
      title: 'Sales and workshop',
      subtitle: 'Buying a vehicle, and keeping it on the road afterwards.',
      moreLabel: 'All services',
      cardCta: 'Read more',
    },
    process: {
      eyebrow: 'How it works',
      title: 'Whether you are buying or booking in',
      subtitle: 'The same four steps, applied to a sale or a repair.',
      steps: [
        {
          title: 'Tell us the job',
          text: 'What you want to buy, or what the vehicle is doing that it should not. Symptoms are enough; you do not need the diagnosis.',
        },
        {
          title: 'We look at it',
          text: 'An inspection or a proper look over the vehicle, so what comes next is based on fact rather than a guess over the phone.',
        },
        {
          title: 'Price before work',
          text: 'You get the cost and the timescale before anything is done, and a phone call if we find something that changes either.',
        },
        {
          title: 'Done and explained',
          text: 'We tell you what was actually done and why, including anything we chose to leave alone.',
        },
      ],
    },
    record: {
      eyebrow: 'Company details',
      title: 'Who you are dealing with',
      subtitle: 'A registered limited company, on the public record since 2024.',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions',
      subtitle: 'Sales on one side, workshop on the other.',
      items: [
        {
          q: 'Do you carry out MOT tests?',
          a: 'We do not test. An MOT test can only be carried out at a station authorised by the DVSA, and we would not imply otherwise. What we do is prepare a vehicle for its test and put right what would fail it, which is a different job and we are clear about the difference.',
        },
        {
          q: 'Will you tell me what is wrong before you charge me?',
          a: 'Yes. You get the diagnosis and the cost before the work starts. If we open something up and find more, the vehicle stops and you get a phone call. Nothing extra goes on the invoice without you agreeing to it first.',
        },
        {
          q: 'What are my rights on a used vehicle?',
          a: 'You are buying from a registered limited company, so the Consumer Rights Act 2015 applies: the vehicle must be of satisfactory quality, fit for purpose and as described. There is a short-term right to reject within thirty days and further rights after that. Buying privately would give you almost none of this.',
        },
        {
          q: 'Can you look at a vehicle I am thinking of buying elsewhere?',
          a: 'Ask us. An hour spent looking at a vehicle before you buy it is usually cheaper than the first repair it needs afterwards.',
        },
        {
          q: 'Do you work on vans as well as cars?',
          a: 'Both. The register lists sale of used cars and light motor vehicles alongside maintenance and repair of motor vehicles, and the workshop is set up for van work as well as cars.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Buying, or something not right?',
      lead: 'Tell us what you are after or what the vehicle is doing, and we will tell you what we can do.',
      secondaryCta: 'Company details',
    },
  },

  about: {
    seo: {
      title: 'About LK Autos and Vans',
      description:
        'A used vehicle dealer and repairer registered in England and Wales, based on Bolton Road, Wolverhampton. Registered details as filed at Companies House.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'We fix what we sell,',
      titleMark: 'which keeps us honest',
      lead:
        'A dealer who never sees the vehicle again can afford to be optimistic. A workshop that will be looking at it in six months cannot.',
    },
    story: {
      title: 'How we work',
      subtitle: 'The workshop sets the standard the forecourt has to meet.',
      paragraphs: [
        'Selling and repairing in the same business changes the incentives. Anything we sell is likely to come back to us for servicing, so a vehicle with a problem we chose to overlook becomes our problem too. That is a more reliable incentive to care than any promise written on a website.',
        'On repairs, the rule is simple: nothing happens before you know what it costs. We diagnose, we tell you, and you decide. If the vehicle is not worth the repair, we will say that as well, even though it is the answer that earns us less.',
        'The company has been registered since April 2024 and works from Bolton Road in Wolverhampton. Its number and registered office are below and on the public register.',
      ],
    },
    values: {
      title: 'What we hold to',
      items: [
        { icon: 'wrench', title: 'Diagnose first', text: 'A proper look before a price, not a price before a look.' },
        { icon: 'check-doc', title: 'Agreed before done', text: 'Nothing is added to an invoice you have not approved.' },
        { icon: 'search', title: 'Checkable', text: 'Registrations handed over so you can run the public history checks.' },
        { icon: 'shield', title: 'Rights intact', text: 'The Consumer Rights Act applies to every sale and every repair.' },
      ],
    },
    record: {
      eyebrow: 'Public record',
      title: 'Registered company details',
      subtitle: 'As filed at Companies House.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Need a vehicle or a repair?',
      lead: 'Either way, tell us what you are dealing with and we will give you a straight answer.',
      secondaryCta: 'What we do',
    },
  },

  servicesPage: {
    seo: {
      title: 'Used cars and vans, servicing and repairs',
      description:
        'Used vehicle sales, servicing, diagnostics, repairs and MOT preparation from LK Autos and Vans Ltd, Wolverhampton.',
    },
    hero: {
      eyebrow: 'Services',
      titleLead: 'Forecourt',
      titleMark: 'and workshop',
      lead: 'Four things we do, and what each of them means in practice.',
    },
    quoteNote:
      'Repairs are quoted against the actual fault once the vehicle has been looked at, and vehicles are priced individually. Nothing on this page is a fixed price or a binding offer.',
    cta: {
      eyebrow: 'Next step',
      title: 'Book it in or come and look',
      lead: 'Tell us the registration and what you need, and we will take it from there.',
      secondaryCta: 'About the company',
    },
  },

  contact: {
    seo: {
      title: 'Contact LK Autos and Vans, Wolverhampton',
      description:
        'Get in touch about a vehicle or a repair. Registered office: 54 Bolton Road, Wolverhampton, WV11 1UA. Company no. 15623149.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Tell us the registration',
      titleMark: 'and what it is doing',
      lead: 'For a repair, symptoms are enough. For a purchase, tell us what the vehicle has to do for you.',
    },
    helpful: {
      title: 'Useful to include',
      items: [
        'The registration, which tells us the exact model and its recorded history.',
        'For a repair: what it is doing, when it started and whether it is getting worse.',
        'For a purchase: budget, car or van, and what it has to carry or tow.',
        'Whether you need it back by a particular day.',
      ],
    },
    channelsTitle: 'How to reach us',
    recordTitle: 'Registered company details',
    cta: {
      eyebrow: 'Next step',
      title: 'Ready when you are',
      lead: 'Send the registration and the problem, and we will come back to you.',
      secondaryCta: 'What we do',
    },
  },

  services: [
    {
      id: 'used-vehicles',
      icon: 'car',
      title: 'Used cars and vans',
      summary: 'Vehicles that have been through our own workshop before they reach the forecourt.',
      points: [
        'Looked over by the people who would have to repair it later.',
        'Mileage, service history and known faults told to you up front.',
        'The registration handed over so you can run the public checks first.',
        'Part exchange considered, with the valuation explained.',
      ],
    },
    {
      id: 'servicing',
      icon: 'wrench',
      title: 'Servicing',
      summary: 'Routine work that keeps a vehicle reliable and its history intact.',
      points: [
        'Service schedules followed, with what was done written down.',
        'Advisories reported honestly, separated into urgent and not yet.',
        'Parts explained, so you know what went on the vehicle.',
        'Records kept properly, which matters when you come to sell it.',
      ],
    },
    {
      id: 'repairs',
      icon: 'gauge',
      title: 'Diagnostics and repairs',
      summary: 'Finding out what is actually wrong before anyone spends money on it.',
      points: [
        'A proper diagnosis rather than replacing parts hopefully.',
        'The cost and the timescale given to you before work begins.',
        'A phone call, and a pause, if we find something that changes the job.',
        'A straight word when a repair is not worth doing on that vehicle.',
      ],
    },
    {
      id: 'mot-preparation',
      icon: 'check-doc',
      title: 'MOT preparation',
      summary: 'Getting a vehicle ready for its test. The test itself is done by a DVSA-authorised station.',
      points: [
        'A pre-test look over the items a tester will actually check.',
        'A list of what would fail, and what is only an advisory.',
        'The work agreed with you before it is carried out.',
        'We do not carry out MOT tests ourselves and do not claim to.',
      ],
    },
  ],
};
