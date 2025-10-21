exports.handler = async function () {
    const about = {
        name: "Justin Wilkins",
        hometown: "Avon, NY",
        bio: `Hi, my name is Justin. If you'd like to learn more about me, explore my website :)

        Please reach out if you'd like to discuss any opportunities you might have, or just to chat.`
    };

    const work = [
        {
            company: "PrismHR",
            companyDescription: [
                "PrismHR is a leading provider of human resource software solutions designed specifically for Professional Employer Organizations (PEOs) and Human Resource Outsourcing (HRO) companies. Their platform helps these organizations manage HR, payroll, benefits, and compliance for hundreds of small to midsize businesses through a single, centralized system.",
                "In simpler terms, PrismHR builds the software that powers HR outsourcing firms — allowing them to efficiently handle employee onboarding, time tracking, tax filing, benefits enrollment, and payroll processing for their client companies.",
                "The platform is primarily a web- based SaaS(Software - as - a - Service) solution, combining an AngularJS front end with a C# /.NET backend and various integrated APIs that connect to third - party services such as tax agencies, benefit providers, and financial systems."
            ],
            companyWebsite: "https://www.prismhr.com/",
            companyLogo: "images/prismhr.png"
        },
        {
            company: "Carestream",
            companyDescription: [
                "PrismHR is a leading provider of human resource software solutions designed specifically for Professional Employer Organizations (PEOs) and Human Resource Outsourcing (HRO) companies. Their platform helps these organizations manage HR, payroll, benefits, and compliance for hundreds of small to midsize businesses through a single, centralized system.",
                "In simpler terms, PrismHR builds the software that powers HR outsourcing firms — allowing them to efficiently handle employee onboarding, time tracking, tax filing, benefits enrollment, and payroll processing for their client companies.",
                "The platform is primarily a web- based SaaS(Software - as - a - Service) solution, combining an AngularJS front end with a C# /.NET backend and various integrated APIs that connect to third - party services such as tax agencies, benefit providers, and financial systems."
            ],
            companyWebsite: "https://www.carestream.com/",
            companyLogo: "images/carestream.png"

        }
    ];

    return {
        statusCode: 200,
        body: JSON.stringify({ about, work })
    };
};