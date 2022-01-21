exports.seed = function (knex) {
  return knex("courses")
    .del()
    .then(function () {
      return knex("courses").insert([
        {
          id: 1,
          title: "Javascript",
          level: "Beginner",
          duration: "20 hours",
          description:
            "This is a sample description for the Course. This will have everything about the course for people to read and get to know more about the courses that they would like to follow",
        },
        {
          id: 2,
          title: "DotNET Basics",
          level: "Beginner",
          duration: "1 week",
          description:
            "This is a sample description for the Course. This will have everything about the course for people to read and get to know more about the courses that they would like to follow",
        },
        {
          id: 3,
          title: "OOP Concepts",
          level: "Intermediate",
          duration: "3 weeks",
          description:
            "This is a sample description for the Course. This will have everything about the course for people to read and get to know more about the courses that they would like to follow",
        },
        {
          id: 4,
          title: "AWS Lambda",
          level: "Advanced",
          duration: "2 months",
          description:
            "This is a sample description for the Course. This will have everything about the course for people to read and get to know more about the courses that they would like to follow",
        },
        {
          id: 5,
          title: "NodeJS",
          level: "Intermediate",
          duration: "1 month",
          description:
            "This is a sample description for the Course. This will have everything about the course for people to read and get to know more about the courses that they would like to follow",
        },
        {
          id: 6,
          title: "MongoDB",
          level: "Beginner",
          duration: "1 week",
          description:
            "This is a sample description for the Course. This will have everything about the course for people to read and get to know more about the courses that they would like to follow",
        },
      ]);
    });
};
