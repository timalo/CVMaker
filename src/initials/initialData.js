const initialData = {
  basicInfo: {
    name: "John Doe",
    email: "johnDoe@email.com",
    phone: "123-456-7890",
  },
  educations: [
    {
      id: crypto.randomUUID(),
      school: "Sample school",
      degree: "Sample degree",
      startDate: "",
      endDate: "",
    },
    {
      id: crypto.randomUUID(),
      school: "Other school",
      degree: "Other degree",
      startDate: "",
      endDate: "",
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
