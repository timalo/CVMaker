const initialData = {
  basicInfo: {
    name: "John Doe",
    email: "johnDoe@email.com",
    phone: "123-456-7890",
  },
  educations: [
    {
      id: crypto.randomUUID(),
      school: "Other school",
      degree: "Other degree",
      startDate: "2012-07",
      endDate: "2015-05",
    },
    {
      id: crypto.randomUUID(),
      school: "Sample school",
      degree: "Sample degree",
      startDate: "2015-07",
      endDate: "2020-05",
    },
  ],

  jobs: [
    {
      id: crypto.randomUUID(),
      company: "Best company",
      title: "CEO",
      startDate: "",
      endDate: "",
    },
    {
      id: crypto.randomUUID(),
      company: "Other company",
      title: "Other job",
      startDate: "",
      endDate: "",
    },
  ],
};
export default initialData;
