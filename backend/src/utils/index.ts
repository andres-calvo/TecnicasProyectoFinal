export const getScore = (data) => {
  let points = 0;
  points += Points.work[data.work];
  points += Points.civilstatus[data.civilstatus];
  points += data.age <= 35? 5:2
  return points
};

const Points = {
  work: {
    true: 5,
    false: 1,
  },
  civilstatus: {
    Soltero: 5,
    Casado: 2,
  },
};
