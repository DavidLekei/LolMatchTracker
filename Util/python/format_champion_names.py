with open("champions.txt") as champ_file:
    with open("output.txt", "w+") as output:
        for champ in champ_file:
            output.write('{name: \"' + champ.strip() + '\", imgName: \"' + ''.join(c for c in champ if c.isalnum()) + '\"},\n')

