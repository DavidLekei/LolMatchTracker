SET @user_id = 0;

SELECT usr.id INTO @user_id
FROM TCUser usr
WHERE usr.username = 'davidlekei' LIMIT 1;

SELECT @user_id;

select mtch.id, usr.username, nts.path from TCMatch mtch join TCUser usr on mtch.user_id = usr.id join TCNotes nts on nts.fk_user_id = usr.id where usr.id = @user_id