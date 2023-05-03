SET @username = "TEST5";

SELECT
nm.champ_played,
nm.champ_against,
nm.user_id,
nm.data,
u.username
FROM Notes_Matchup as nm
JOIN
User u on u.id = nm.user_id
UNION
SELECT
nc.champ,
nc.id,
nc.user_id,
nc.data,
u.username
FROM
Notes_Champion AS nc
JOIN
User u on u.id = nc.user_id;

SELECT * FROM
(
    SELECT nm.user_id, nm.champ_played, nm.champ_against FROM Notes_Matchup AS nm
    UNION
    SELECT nc.user_id, nc.champ, nc.data FROM Notes_Champion AS nc
) AS utable
JOIN User u on u.id = utable.user_id
WHERE utable.user_id = 1;
