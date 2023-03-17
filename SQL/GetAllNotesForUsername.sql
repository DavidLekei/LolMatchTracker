--Get All Notes for Username

SET @username = "Admin";

SELECT n.type,
n.data,
n.last_update,
c.name,
ca.name,
u.username
FROM Notes n
JOIN Notes_Matchup nm on nm.notes_id = n.id
JOIN Champion c on c.id = nm.champ_played
JOIN Champion ca on ca.id = nm.champ_against
JOIN User u on u.id = n.fk_user_id
WHERE u.username = @username;