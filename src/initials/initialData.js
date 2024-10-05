const initialData = {
  basicInfo: {
    name: "John Doe",
    email: "johnDoe@email.com",
    phone: "123-456-7890",
    location: "New York",
  }, //The basicInfo here may not be even be used in the main app???
  educations: [
    {
      id: crypto.randomUUID(),
      school: "University of exampleTown",
      degree: "BSc in example sciences",
      startDate: "2012-07",
      endDate: "2015-05",
    },
    {
      id: crypto.randomUUID(),
      school: "University in another town Far Away",
      degree: "Masters in example sciences",
      startDate: "2015-07",
      endDate: "2020-05",
    },
  ],

  jobs: [
    {
      id: crypto.randomUUID(),
      company: "Best company",
      title: "CEO",
      startDate: "1920-08",
      endDate: "1950-06",
      description:
        "In this company I did the best things related to the job in the 20s. Very good stuff. I did this and that, and also this other thing. It was a great time.",
    },
    {
      id: crypto.randomUUID(),
      company: "Other company",
      title: "Other job",
      startDate: "1998-01",
      endDate: "2023-04",
      description:
        "In this company I did other things related to the job. Very good stuff.",
    },
  ],
};
export default initialData;
