import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const score = Seq(obj)
    .filter((student) => student.score > 70)
    .map((student) => ({
      score: student.score,
      firstName: student.firstName,
      lastName: student.lastName,
    }));
  console.log(score.toObject());
}
