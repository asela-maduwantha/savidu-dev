const connection = require('../../../Services/connection');



async function updateProfileAdmin(req, res) {
    const { email, firstName, lastName, adminRole } = req.body;
    try {
        const sql = 'UPDATE parttime_srilanka.admins SET FirstName = ?, LastName = ?, AdminRole = ? WHERE Email = ?';
        connection.query(sql, [firstName, lastName, adminRole, email], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.status(200).json({ message: 'Profile updated successfully' });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = updateProfileAdmin