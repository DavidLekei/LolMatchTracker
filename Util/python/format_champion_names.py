with open("champions.txt") as champ_file:
    with open("output.txt", "w+") as output:
        for champ in champ_file:
            output.write('{name: \"' + champ.strip() + "\"},\n")

