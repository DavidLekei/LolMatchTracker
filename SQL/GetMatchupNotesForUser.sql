SET @user_id = 1;

SELECT
n.data AS "Notes Data",
nt.description AS "Type of Notes", 
c.name AS "Champion Played",
c2.name AS "Champion Against"
FROM Notes n
JOIN Notes_Matchup nm ON nm.notes_id = n.id
JOIN NoteType nt ON nt.id = n.type
JOIN Champion c ON nm.champ_played = c.id
JOIN Champion c2 on nm.champ_against = c2.id
JOIN User u on u.id = n.fk_user_id
WHERE u.id = @user_id;