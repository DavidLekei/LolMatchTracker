--CREATE PROCEDURE Insert_Matchup_Notes()

SET @user_id = 7;
SET @champ_played = 47;
SET @champ_against = 112;
SET @notes_type = 3;

START TRANSACTION;
    --Insert the Notes data into the Notes table first
    INSERT INTO Notes(type, data, last_update, fk_user_id) 
    VALUES(@notes_type, "Fake Data From Newly Created Insert SQL File", NOW(), @user_id);

    --Get the Primary key (aka ID) of the newly inserted Notes record
    SET @notes_id = LAST_INSERT_ID();
    SELECT @notes_id;
    --Then link that entry to the Notes_Matchup table
    INSERT INTO Notes_Matchup(champ_played, champ_against, notes_id)
    VALUES(@champ_played, @champ_against, @notes_id);

    SET @row_count = ROW_COUNT();
    SELECT @row_count;

    DELIMITER $
    BEGIN NOT ATOMIC
        IF @row_count=1 THEN
            COMMIT;
            SELECT 'Change committed';
        ELSE
            ROLLBACK;
            SELECT 'Rolled back the change';
        END IF;
    END $
    DELIMITER ;
