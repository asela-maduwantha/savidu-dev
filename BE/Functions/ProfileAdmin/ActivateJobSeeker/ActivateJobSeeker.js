const connection = require("../../../Services/connection");

async function activateJobSeeker(req, res) {
  const sql =
    "UPDATE `parttime_srilanka`.`job_seeker` SET `ActiveStatus` = 1 WHERE (`UserId` = ?);";

  connection.query(sql, req.params.id, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json("error activate user.");
    } else {
      return res.status(200).json("user activated.");
    }
  });
}

module.exports = activateJobSeeker;
