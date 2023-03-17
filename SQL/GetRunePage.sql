SET @user_id = 9;

SELECT r.name,
r2.name,
r3.name,
r4.name,
r5.name,
r6.name,
re.name,
re2.name,
re3.name,
rp.user_id
FROM RunePage rp 
JOIN Rune r ON r.id = rp.keystone
JOIN Rune r2 ON r2.id = rp.primary_slot_1
JOIN Rune r3 ON r3.id = rp.primary_slot_2
JOIN Rune r4 ON r4.id = rp.primary_slot_3
JOIN Rune r5 ON r5.id = rp.secondary_slot_1
JOIN Rune r6 ON r6.id = rp.secondary_slot_2
JOIN RuneExtra re ON re.id = rp.extra_slot_1
JOIN RuneExtra re2 ON re2.id = rp.extra_slot_2
JOIN RuneExtra re3 ON re3.id = rp.extra_slot_3
WHERE rp.user_id = @user_id;

