exports.handler = async function () {
    const about = {
        name: "Justin Wilkins",
        hometown: "Avon, NY",
        bio: `Hi, my name is Justin. I grew up with two older brothers.
I started work at a company called Carestream as a Quality Assurance Engineer,
but quickly accelerated into a role as an Automation Engineer and eventually as a
Software Contractor.

Soon enough I realized that I enjoyed building and developing software, but I had a knack for
testing and pointing out problems that others couldn't find. You can read more about my experience down
below.

I'm currently interested in roles that would allow me to build automated testing frameworks
and drive better quality software by developing quality testing software.

When I’m not immersed in automation, you’ll likely find me gaming, skiing, or riding on my motorcycle.

Please reach out if you'd like to discuss any opportunities you might have, or just to chat. I have
a contact page on my navigation header above.

Also, my cat Jimmy says hi.`
    };

    const work = [
        {
            company: "PrismHR",
            roles: [
                {
                    title: "Quality Assurance Engineer",
                    date: "June 2022 - Present",
                    details: [
                        "Utilized Cypress and TypeScript to develop and execute automation test suites for a web application, ensuring comprehensive end-to-end and API test coverage.",
                        "Optimized test automation workflows, including parallel execution and refined test case design, reducing the regression testing cycle from a week to 2–4 days.",
                        "Built and integrated CI/CD pipelines using GitHub Actions to automate test execution, enhancing release efficiency with continuous feedback.",
                        "Collaborated with developers and product teams to identify, track, and resolve complex defects, improving user experience and supporting Agile development practices."
                    ]
                }
            ]
        },
        {
            company: "Carestream",
            roles: [
                {
                    title: "Software Engineer",
                    date: "March 2019 - June 2022",
                    details: [
                        "Maintained C# and AngularJS web app",
                        "Mentored team in debugging and automation strategies"
                    ]
                },
                {
                    title: "Automation Engineer",
                    date: "July 2017 - March 2019",
                    details: [
                        "Built Python-based test automation framework using Robot Framework",
                        "Reduced regression cycle from 2 weeks to 3 days",
                        "Integrated into Jenkins CI/CD pipelines"
                    ]
                }
            ]
        }
    ];

    return {
        statusCode: 200,
        body: JSON.stringify({ about, work })
    };
};